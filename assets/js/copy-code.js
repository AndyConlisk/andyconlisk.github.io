document.querySelectorAll('pre.highlight').forEach((codeBlock) => {
  // 1. Create the button
  const button = document.createElement('button');
  button.className = 'copy-code-button';
  button.type = 'button';
  button.innerText = 'Copy';

  // 2. Wrap the pre in a relative container for positioning
  const wrapper = document.createElement('div');
  wrapper.className = 'code-wrapper';
  codeBlock.parentNode.insertBefore(wrapper, codeBlock);
  wrapper.appendChild(codeBlock);
  wrapper.appendChild(button);

  // 3. Add click event
  button.addEventListener('click', () => {
    const code = codeBlock.querySelector('code').innerText;

    navigator.clipboard.writeText(code).then(() => {
      button.innerText = 'Copied!';
      button.classList.add('copied');

      // Reset button text after 2 seconds
      setTimeout(() => {
        button.innerText = 'Copy';
        button.classList.remove('copied');
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
      button.innerText = 'Error';
    });
  });
});