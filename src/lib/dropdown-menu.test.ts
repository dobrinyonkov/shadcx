import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from './dropdown-menu.ts'

function frame() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
}

function setupMenu() {
  document.body.innerHTML = `
    <shadcx-dropdown-menu>
      <shadcx-dropdown-menu-trigger><button type="button">Open</button></shadcx-dropdown-menu-trigger>
    <shadcx-dropdown-menu-content>
        <shadcx-dropdown-menu-group id="group">
        <shadcx-dropdown-menu-label>Account</shadcx-dropdown-menu-label>
        <shadcx-dropdown-menu-item id="profile">Profile</shadcx-dropdown-menu-item>
        </shadcx-dropdown-menu-group>
        <shadcx-dropdown-menu-item id="disabled" disabled>Disabled</shadcx-dropdown-menu-item>
        <shadcx-dropdown-menu-checkbox-item id="toolbar" checked>Toolbar</shadcx-dropdown-menu-checkbox-item>
        <shadcx-dropdown-menu-radio-group id="density" value="comfortable">
          <shadcx-dropdown-menu-radio-item id="compact" value="compact">Compact</shadcx-dropdown-menu-radio-item>
          <shadcx-dropdown-menu-radio-item id="comfortable" value="comfortable">Comfortable</shadcx-dropdown-menu-radio-item>
        </shadcx-dropdown-menu-radio-group>
        <shadcx-dropdown-menu-sub id="sub">
          <shadcx-dropdown-menu-sub-trigger id="sub-trigger">More</shadcx-dropdown-menu-sub-trigger>
          <shadcx-dropdown-menu-sub-content id="sub-content">
            <shadcx-dropdown-menu-item id="invite">Invite</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-sub-content>
        </shadcx-dropdown-menu-sub>
        <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
        <shadcx-dropdown-menu-item id="delete" variant="destructive">Delete</shadcx-dropdown-menu-item>
      </shadcx-dropdown-menu-content>
    </shadcx-dropdown-menu>
  `

  const menu = document.querySelector('shadcx-dropdown-menu')!
  const trigger = document.querySelector('shadcx-dropdown-menu-trigger button')!
  const content = document.querySelector('shadcx-dropdown-menu-content')!

  return { menu, trigger, content }
}

function itemButton(selector: string) {
  const item = document.querySelector<HTMLElement>(selector)
  return item?.shadowRoot?.querySelector<HTMLButtonElement>('button') ?? null
}

afterEach(() => {
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('DropdownMenu', () => {
  it('opens and closes from the trigger', async () => {
    const { menu, trigger, content } = setupMenu()

    expect(menu.hasAttribute('open')).toBe(false)
    expect(content.hasAttribute('data-open')).toBe(false)

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await frame()

    expect(menu.hasAttribute('open')).toBe(true)
    expect(content.hasAttribute('data-open')).toBe(true)

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))

    expect(menu.hasAttribute('open')).toBe(false)
    expect(content.hasAttribute('data-open')).toBe(false)
  })

  it('closes on item selection, outside pointerdown, and Escape', async () => {
    const { menu, trigger, content } = setupMenu()

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await frame()
    itemButton('#profile')?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    expect(menu.hasAttribute('open')).toBe(false)

    menu.setAttribute('open', '')
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }))
    expect(menu.hasAttribute('open')).toBe(false)

    menu.setAttribute('open', '')
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(menu.hasAttribute('open')).toBe(false)
    expect(content.hasAttribute('data-open')).toBe(false)
  })

  it('opens from keyboard and roves focus with arrow, Home, and End keys', async () => {
    const { menu, trigger } = setupMenu()

    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }))
    await frame()
    expect(menu.hasAttribute('open')).toBe(true)
    expect(document.querySelector('#profile')?.shadowRoot?.activeElement).toBe(itemButton('#profile'))

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }))
    await frame()
    expect(document.querySelector('#toolbar')?.shadowRoot?.activeElement).toBe(itemButton('#toolbar'))

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true, composed: true }))
    await frame()
    expect(document.querySelector('#delete')?.shadowRoot?.activeElement).toBe(itemButton('#delete'))

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true, composed: true }))
    await frame()
    expect(document.querySelector('#profile')?.shadowRoot?.activeElement).toBe(itemButton('#profile'))

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true }))
    await frame()
    expect(document.querySelector('#delete')?.shadowRoot?.activeElement).toBe(itemButton('#delete'))
  })

  it('opens to the last item when ArrowUp is pressed on the trigger', async () => {
    const { trigger } = setupMenu()

    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true }))
    await frame()

    expect(document.querySelector('#delete')?.shadowRoot?.activeElement).toBe(itemButton('#delete'))
  })

  it('opens from Space and preserves end alignment on content', async () => {
    const { menu, trigger, content } = setupMenu()

    content.setAttribute('align', 'end')
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, composed: true }))
    await frame()

    expect(menu.hasAttribute('open')).toBe(true)
    expect(content.getAttribute('data-align')).toBe('end')
  })

  it('toggles checkbox items and emits checked-change', () => {
    setupMenu()
    const checkbox = document.querySelector('shadcx-dropdown-menu-checkbox-item')!
    const listener = vi.fn()

    checkbox.addEventListener('checked-change', listener)
    itemButton('#toolbar')?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))

    expect(checkbox.hasAttribute('checked')).toBe(false)
    expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: { checked: false } }))
  })

  it('does not toggle disabled checkbox items', () => {
    setupMenu()
    const checkbox = document.querySelector('shadcx-dropdown-menu-checkbox-item')!
    const listener = vi.fn()

    checkbox.setAttribute('disabled', '')
    checkbox.addEventListener('checked-change', listener)
    itemButton('#toolbar')?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))

    expect(checkbox.hasAttribute('checked')).toBe(true)
    expect(listener).not.toHaveBeenCalled()
  })

  it('updates radio item state and emits value-change', () => {
    setupMenu()
    const group = document.querySelector('shadcx-dropdown-menu-radio-group')!
    const compact = document.querySelector('shadcx-dropdown-menu-radio-item[value="compact"]')!
    const listener = vi.fn()

    group.addEventListener('value-change', listener)
    itemButton('#compact')?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))

    expect(group.getAttribute('value')).toBe('compact')
    expect(compact.hasAttribute('checked')).toBe(true)
    expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: { value: 'compact' } }))
  })

  it('ignores disabled radio items and can clear radio group value', () => {
    setupMenu()
    const group = document.querySelector('shadcx-dropdown-menu-radio-group') as DropdownMenuRadioGroup
    const compact = document.querySelector('shadcx-dropdown-menu-radio-item[value="compact"]')!
    const listener = vi.fn()

    compact.setAttribute('disabled', '')
    group.addEventListener('value-change', listener)
    itemButton('#compact')?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))

    expect(group.value).toBe('comfortable')
    expect(listener).not.toHaveBeenCalled()

    group.value = ''
    expect(group.hasAttribute('value')).toBe(false)
  })

  it('opens submenu on focus and flips submenu placement when space is limited', async () => {
    setupMenu()
    const sub = document.querySelector('shadcx-dropdown-menu-sub')!
    const subContent = document.querySelector('shadcx-dropdown-menu-sub-content')!

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(120)
    vi.spyOn(sub.querySelector('shadcx-dropdown-menu-sub-trigger')!, 'getBoundingClientRect').mockReturnValue({
      left: 80,
      right: 112,
      top: 0,
      bottom: 32,
      width: 32,
      height: 32,
      x: 80,
      y: 0,
      toJSON: () => {},
    })
    vi.spyOn(subContent, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 96,
      top: 0,
      bottom: 40,
      width: 96,
      height: 40,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    sub.dispatchEvent(new FocusEvent('focusin', { bubbles: true, composed: true }))
    await frame()

    expect(sub.hasAttribute('open')).toBe(true)
    expect(subContent.getAttribute('data-side')).toBe('left')
  })

  it('sets top placement and constrained height when space below is limited', async () => {
    const { menu, trigger, content } = setupMenu()

    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(120)
    vi.spyOn(document.querySelector('shadcx-dropdown-menu-trigger')!, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 80,
      top: 80,
      bottom: 112,
      width: 80,
      height: 32,
      x: 0,
      y: 80,
      toJSON: () => {},
    })
    vi.spyOn(content, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 160,
      top: 0,
      bottom: 96,
      width: 160,
      height: 96,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await frame()

    expect(menu.hasAttribute('open')).toBe(true)
    expect(content.getAttribute('data-side')).toBe('top')
    expect(content.hasAttribute('data-constrain')).toBe(true)
  })

  it('sets bottom placement and leaves height unconstrained when space below fits', async () => {
    const { trigger, content } = setupMenu()

    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(500)
    vi.spyOn(document.querySelector('shadcx-dropdown-menu-trigger')!, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 80,
      top: 20,
      bottom: 52,
      width: 80,
      height: 32,
      x: 0,
      y: 20,
      toJSON: () => {},
    })
    vi.spyOn(content, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 160,
      top: 0,
      bottom: 96,
      width: 160,
      height: 96,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await frame()

    expect(content.getAttribute('data-side')).toBe('bottom')
    expect(content.hasAttribute('data-constrain')).toBe(false)
  })

  it('sets submenu right placement when there is room', async () => {
    setupMenu()
    const sub = document.querySelector('shadcx-dropdown-menu-sub')!
    const subContent = document.querySelector('shadcx-dropdown-menu-sub-content')!

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(500)
    vi.spyOn(sub.querySelector('shadcx-dropdown-menu-sub-trigger')!, 'getBoundingClientRect').mockReturnValue({
      left: 20,
      right: 80,
      top: 0,
      bottom: 32,
      width: 60,
      height: 32,
      x: 20,
      y: 0,
      toJSON: () => {},
    })
    vi.spyOn(subContent, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 96,
      top: 0,
      bottom: 40,
      width: 96,
      height: 40,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    sub.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true, composed: true }))
    await frame()

    expect(subContent.getAttribute('data-side')).toBe('right')
  })

  it('reflects item attributes into shadow controls', () => {
    setupMenu()
    const destructive = itemButton('#delete')
    const disabled = itemButton('#disabled')
    const group = document.querySelector('shadcx-dropdown-menu-group')

    expect(destructive?.dataset.variant).toBe('destructive')
    expect(disabled?.disabled).toBe(true)
    expect(group?.shadowRoot?.querySelector('[part="root"]')).toBeTruthy()
  })

  it('supports public property setters', () => {
    const item = new DropdownMenuItem()
    const checkbox = new DropdownMenuCheckboxItem()
    const radio = new DropdownMenuRadioItem()

    item.variant = 'destructive'
    item.disabled = true
    checkbox.checked = true
    radio.value = 'spacious'
    radio.checked = true

    expect(item.getAttribute('variant')).toBe('destructive')
    expect(item.hasAttribute('disabled')).toBe(true)
    expect(checkbox.hasAttribute('checked')).toBe(true)
    expect(radio.getAttribute('value')).toBe('spacious')
    expect(radio.hasAttribute('checked')).toBe(true)
  })

  it('returns default public property values', () => {
    const item = new DropdownMenuItem()
    const radio = new DropdownMenuRadioItem()
    const group = new DropdownMenuRadioGroup()

    expect(item.variant).toBe('default')
    expect(item.disabled).toBe(false)
    expect(radio.value).toBe('')
    expect(radio.checked).toBe(false)
    expect(group.value).toBe('')
  })
})
