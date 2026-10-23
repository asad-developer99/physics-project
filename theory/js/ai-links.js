document.addEventListener('click', function (e) {
  var a = e.target.closest('.ai-links a[data-ai]');
  if (!a) return;
  e.preventDefault();

  var box = a.closest('.ai-links');
  var prompt = 'I am studying the physics topic "' + box.dataset.topic +
    '" (section: ' + box.dataset.section + ', topic ' + box.dataset.number + '). ' +
    'Please explain it clearly with: 1) a simple intuitive explanation, ' +
    '2) the key formulas with every symbol defined, 3) two worked numerical examples, ' +
    '4) common mistakes students make, 5) real-life applications, and ' +
    '6) three practice questions with answers. Use simple language.';

  var urls = {
    claude:     'https://claude.ai/new?q=',
    chatgpt:    'https://chatgpt.com/?q=',
    perplexity: 'https://www.perplexity.ai/search?q=',
    grok:       'https://grok.com/?q='
  };
  var ai = a.dataset.ai;

  if (ai === 'gemini') {
    var note = box.querySelector('.ai-note');
    var say = function () { note.textContent = 'Prompt copied. Paste it into Gemini (Ctrl+V).'; };
    if (navigator.clipboard) navigator.clipboard.writeText(prompt).then(say, say); else say();
    window.open('https://gemini.google.com/app', '_blank', 'noopener');
  } else {
    window.open(urls[ai] + encodeURIComponent(prompt), '_blank', 'noopener');
  }
}, true);