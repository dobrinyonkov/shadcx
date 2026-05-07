import { afterEach, describe, expect, it, vi } from 'vitest'
import './form-playground-page.ts'

async function frame() {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
}

describe('form playground page', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('validates required form controls and submits valid data', async () => {
    const page = document.createElement('form-playground-page')
    document.body.append(page)
    await page.updateComplete

    const root = page.shadowRoot!
    const submit = root.querySelector('shadcx-button')!.shadowRoot!.querySelector('button')!

    submit.click()
    await page.updateComplete
    expect(root.textContent).toContain('Please complete the required fields')
    expect(root.querySelector('shadcx-input[data-name="name"]')?.hasAttribute('aria-invalid')).toBe(true)
    expect(root.querySelector('shadcx-checkbox[data-name="accepted"]')?.hasAttribute('aria-invalid')).toBe(true)

    const nameInput = root.querySelector('shadcx-input[data-name="name"]')!.shadowRoot!.querySelector('input')!
    const emailInput = root.querySelector('shadcx-input[data-name="email"]')!.shadowRoot!.querySelector('input')!
    nameInput.value = 'Ada Lovelace'
    emailInput.value = 'ada@example.com'
    nameInput.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }))
    emailInput.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }))
    root.querySelector('shadcx-checkbox[data-name="accepted"]')!.shadowRoot!.querySelector('button')!.click()
    await page.updateComplete

    submit.click()
    await page.updateComplete
    expect(root.textContent).toContain('Submitted Ada Lovelace using Lit.')
    expect(root.textContent).toContain('Last Request')
    expect(root.textContent).toContain('form-playground-submit')
    expect(root.textContent).toContain('ada@example.com')
    expect(root.querySelector('shadcx-input[data-name="name"]')?.hasAttribute('aria-invalid')).toBe(false)
    expect(root.querySelector('shadcx-checkbox[data-name="accepted"]')?.hasAttribute('aria-invalid')).toBe(false)
  })

  it('updates combobox, checkbox, and reset support', async () => {
    const page = document.createElement('form-playground-page')
    document.body.append(page)
    await page.updateComplete

    const root = page.shadowRoot!
    const framework = root.querySelector('#framework')!
    const channels = root.querySelector('#channels')!
    const reset = root.querySelectorAll('shadcx-button')[1].shadowRoot!.querySelector('button')!

    framework.dispatchEvent(new CustomEvent('value-change', { detail: { value: 'Astro' }, bubbles: true, composed: true }))
    channels.dispatchEvent(new CustomEvent('value-change', { detail: { value: ['Email', 'Discord'] }, bubbles: true, composed: true }))
    root.querySelectorAll('shadcx-checkbox')[1].shadowRoot!.querySelector('button')!.click()
    await page.updateComplete
    await frame()

    expect(root.textContent).toContain('Astro')
    expect(root.textContent).toContain('Email, Discord')
    expect(root.textContent).toContain('Newsletter')
    expect(root.textContent).toContain('Off')

    reset.click()
    await page.updateComplete
    expect(root.textContent).toContain('Form reset.')
    expect(root.textContent).toContain('Lit')
    expect(root.textContent).toContain('Email')
  })
})
