import { afterEach, describe, expect, it, vi } from 'vitest'
import { Badge } from './badge.ts'
import { Button } from './button.ts'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card.ts'
import { Checkbox } from './checkbox.ts'
import { Combobox } from './combobox.ts'
import { Input } from './input.ts'
import { Textarea } from './textarea.ts'

function frame() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
}

afterEach(() => {
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('button and badge', () => {
  it('renders button variants, sizes, and disabled state', () => {
    const button = new Button()
    document.body.append(button)

    expect(button.variant).toBe('default')
    expect(button.size).toBe('default')
    expect(button.shadowRoot?.querySelector('button')?.dataset.variant).toBe('default')

    button.variant = 'destructive'
    button.size = 'icon-sm'
    button.disabled = true

    const control = button.shadowRoot?.querySelector<HTMLButtonElement>('button')
    expect(control?.dataset.variant).toBe('destructive')
    expect(control?.dataset.size).toBe('icon-sm')
    expect(control?.disabled).toBe(true)
  })

  it('renders badge variants', () => {
    const badge = new Badge()
    document.body.append(badge)

    expect(badge.variant).toBe('default')
    badge.variant = 'outline'

    const root = badge.shadowRoot?.querySelector<HTMLElement>('[part="root"]')
    expect(root?.dataset.variant).toBe('outline')
    expect(root?.tabIndex).toBe(0)
  })
})

describe('input and textarea', () => {
  it('reflects input attributes into the inner input', () => {
    const input = new Input()
    document.body.append(input)

    input.type = 'email'
    input.placeholder = 'Email'
    input.disabled = true
    input.required = true
    input.readonly = true
    input.ariaInvalid = 'true'

    const control = input.shadowRoot?.querySelector<HTMLInputElement>('input')
    expect(control?.type).toBe('email')
    expect(control?.placeholder).toBe('Email')
    expect(control?.disabled).toBe(true)
    expect(control?.required).toBe(true)
    expect(control?.readOnly).toBe(true)
    expect(control?.getAttribute('aria-invalid')).toBe('true')

    input.ariaInvalid = null
    expect(input.shadowRoot?.querySelector('input')?.hasAttribute('aria-invalid')).toBe(false)
  })

  it('reflects textarea attributes and keeps live value', () => {
    const textarea = new Textarea()
    document.body.append(textarea)

    textarea.placeholder = 'Message'
    textarea.value = 'Hello'
    textarea.rows = '6'
    textarea.disabled = true
    textarea.required = true
    textarea.readonly = true
    textarea.ariaInvalid = 'true'

    let control = textarea.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea')
    expect(control?.placeholder).toBe('Message')
    expect(control?.value).toBe('Hello')
    expect(control?.rows).toBe(6)
    expect(control?.disabled).toBe(true)
    expect(control?.required).toBe(true)
    expect(control?.readOnly).toBe(true)
    expect(control?.getAttribute('aria-invalid')).toBe('true')

    control!.value = 'Typed'
    expect(textarea.value).toBe('Typed')

    textarea.ariaInvalid = null
    control = textarea.shadowRoot?.querySelector('textarea')
    expect(control?.hasAttribute('aria-invalid')).toBe(false)
  })
})

describe('checkbox', () => {
  it('toggles checked state with click and Enter', () => {
    const checkbox = new Checkbox()
    const listener = vi.fn()
    document.body.append(checkbox)
    checkbox.addEventListener('checked-change', listener)

    const button = checkbox.shadowRoot?.querySelector<HTMLButtonElement>('button')
    button?.click()
    expect(checkbox.checked).toBe(true)
    expect(listener).toHaveBeenLastCalledWith(expect.objectContaining({ detail: expect.objectContaining({ state: 'checked' }) }))

    button?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(checkbox.checked).toBe(false)
  })

  it('handles indeterminate, invalid, disabled, and ignored keys', () => {
    const checkbox = new Checkbox()
    const listener = vi.fn()
    document.body.append(checkbox)

    checkbox.indeterminate = true
    checkbox.ariaInvalid = 'true'
    checkbox.addEventListener('checked-change', listener)
    checkbox.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click()

    expect(checkbox.indeterminate).toBe(false)
    expect(checkbox.checked).toBe(true)
    expect(checkbox.shadowRoot?.querySelector('button')?.getAttribute('aria-invalid')).toBe('true')

    checkbox.disabled = true
    checkbox.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click()
    expect(listener).toHaveBeenCalledTimes(1)

    checkbox.disabled = false
    checkbox.shadowRoot?.querySelector('button')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }))
    expect(listener).toHaveBeenCalledTimes(1)

    checkbox.ariaInvalid = null
    expect(checkbox.shadowRoot?.querySelector('button')?.hasAttribute('aria-invalid')).toBe(false)
  })
})

describe('card', () => {
  it('renders all card parts and size variants', () => {
    document.body.innerHTML = `
      <shadcx-card>
        <shadcx-card-header>
          <shadcx-card-title>Title</shadcx-card-title>
          <shadcx-card-description>Description</shadcx-card-description>
          <shadcx-card-action>Action</shadcx-card-action>
        </shadcx-card-header>
        <shadcx-card-content>Content</shadcx-card-content>
        <shadcx-card-footer>Footer</shadcx-card-footer>
      </shadcx-card>
    `

    const card = document.querySelector('shadcx-card') as Card
    expect(card.size).toBe('default')
    card.size = 'sm'
    expect(card.shadowRoot?.querySelector<HTMLElement>('[part="root"]')?.dataset.size).toBe('sm')

    for (const tag of [
      'shadcx-card-header',
      'shadcx-card-title',
      'shadcx-card-description',
      'shadcx-card-action',
      'shadcx-card-content',
      'shadcx-card-footer',
    ]) {
      expect(document.querySelector(tag)?.shadowRoot?.querySelector('[part="root"]')).toBeTruthy()
    }
  })

  it('constructs card element classes directly', () => {
    for (const Element of [CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter]) {
      const element = new Element()
      document.body.append(element)
      expect(element.shadowRoot?.querySelector('[part="root"]')).toBeTruthy()
    }
  })
})

describe('combobox', () => {
  function setupCombobox(multiple = false) {
    const combobox = new Combobox()
    combobox.items = ['Next.js', 'SvelteKit', 'Astro']
    combobox.placeholder = 'Pick one'
    combobox.autoHighlight = true
    combobox.showClear = true
    if (multiple) combobox.multiple = true
    document.body.append(combobox)
    return combobox
  }

  it('filters, highlights, selects, clears, and closes single value', async () => {
    const combobox = setupCombobox()
    const listener = vi.fn()
    combobox.addEventListener('value-change', listener)

    let input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new FocusEvent('focus'))
    await frame()
    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.value = 'sv'
    input.dispatchEvent(new InputEvent('input', { bubbles: true }))
    await frame()

    expect(combobox.shadowRoot?.querySelector('.content')).toBeTruthy()
    expect(combobox.shadowRoot?.textContent).toContain('SvelteKit')

    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(combobox.value).toBe('SvelteKit')
    expect(listener).toHaveBeenLastCalledWith(expect.objectContaining({ detail: { value: 'SvelteKit' } }))

    combobox.shadowRoot?.querySelector<HTMLButtonElement>('.icon-btn')?.click()
    expect(combobox.value).toBe('')

    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
    input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(combobox.shadowRoot?.querySelector('.content')).toBeFalsy()

    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }))
    expect(combobox.shadowRoot?.querySelector('.content')).toBeFalsy()
  })

  it('supports multiple values, removal, empty state, and disabled action button', async () => {
    const combobox = setupCombobox(true)
    const listener = vi.fn()
    combobox.addEventListener('value-change', listener)

    combobox.shadowRoot?.querySelector<HTMLInputElement>('input')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await frame()
    combobox.shadowRoot?.querySelector<HTMLButtonElement>('[data-item-index="0"]')?.click()
    expect(combobox.values).toEqual(['Next.js'])

    combobox.shadowRoot?.querySelector<HTMLInputElement>('input')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await frame()
    combobox.shadowRoot?.querySelector<HTMLButtonElement>('[data-item-index="0"]')?.click()
    expect(combobox.values).toEqual([])

    combobox.values = ['Astro']
    combobox.shadowRoot?.querySelector<HTMLButtonElement>('[data-remove-value="Astro"]')?.click()
    expect(listener).toHaveBeenLastCalledWith(expect.objectContaining({ detail: { value: [] } }))

    const input = combobox.shadowRoot?.querySelector<HTMLInputElement>('input')!
    input.value = 'none'
    input.dispatchEvent(new InputEvent('input', { bubbles: true }))
    await frame()
    expect(combobox.shadowRoot?.querySelector('[part="empty"]')?.textContent).toContain('No items found')

    combobox.disabled = true
    combobox.shadowRoot?.querySelector<HTMLButtonElement>('.icon-btn')?.click()
    expect(combobox.shadowRoot?.querySelector('.content')).toBeTruthy()
  })

  it('reflects public properties and escapes rendered values', async () => {
    const combobox = new Combobox()
    document.body.append(combobox)

    combobox.items = ['<script>', 'Quote " item']
    combobox.placeholder = 'Search <items>'
    combobox.ariaInvalid = 'true'
    combobox.value = 'Quote " item'
    await frame()

    expect(combobox.items).toEqual(['<script>', 'Quote " item'])
    expect(combobox.placeholder).toBe('Search <items>')
    expect(combobox.shadowRoot?.querySelector('input')?.getAttribute('aria-invalid')).toBe('true')

    combobox.value = ''
    combobox.values = 'bad' as unknown as string[]
    combobox.items = 'bad' as unknown as string[]
    expect(combobox.value).toBe('')
    expect(combobox.values).toEqual([])
    expect(combobox.items).toEqual([])

    combobox.ariaInvalid = null
    expect(combobox.shadowRoot?.querySelector('input')?.hasAttribute('aria-invalid')).toBe(false)
  })
})
