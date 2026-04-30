import './main.css'

const pages: Record<string, { title: string; html: string }> = {
  overview: {
    title: 'Overview',
    html: `<p>shadcx is now pure CSS. Use semantic HTML directly and opt-in classes for variants.</p>`,
  },
  button: {
    title: 'Button',
    html: `<div class="row"><button>Primary</button><button class="scx-secondary">Secondary</button><button class="scx-outline">Outline</button><button class="scx-ghost">Ghost</button><button class="scx-link">Link</button><button class="scx-destructive">Destructive</button></div>
<pre><code>&lt;button&gt;Primary&lt;/button&gt;
&lt;button class="scx-secondary"&gt;Secondary&lt;/button&gt;</code></pre>`,
  },
  badge: {
    title: 'Badge',
    html: `<div class="row"><span class="scx-badge">Default</span><span class="scx-badge scx-secondary">Secondary</span><span class="scx-badge scx-outline">Outline</span></div>`,
  },
  input: {
    title: 'Input',
    html: `<label>Email<input type="email" placeholder="you@example.com" /></label><label>Invalid<input aria-invalid="true" placeholder="Required" /></label>`,
  },
  checkbox: {
    title: 'Checkbox',
    html: `<label><input type="checkbox" checked /> Accept terms</label>`,
  },
  combobox: {
    title: 'Combobox',
    html: `<label>Fruit<select class="scx-combobox"><option>Apple</option><option>Banana</option></select></label>`,
  },
  theming: {
    title: 'Theming',
    html: `<p>Override shadcn variables on <code>:root</code> or <code>.dark</code>.</p><pre><code>:root { --primary: 262 83% 58%; --radius: .75rem; }</code></pre>`,
  },
}

const nav = Object.entries(pages)
  .map(([key, p]) => `<a href="#/${key}">${p.title}</a>`)
  .join('')

document.body.innerHTML = `<div class="layout"><aside><h1>shadcx</h1>${nav}</aside><main id="content"></main></div>`

function render() {
  const key = location.hash.replace('#/', '') || 'overview'
  const page = pages[key] || pages.overview
  const content = document.getElementById('content')!
  content.innerHTML = `<section><h2>${page.title}</h2>${page.html}</section>`
}
window.addEventListener('hashchange', render)
render()
