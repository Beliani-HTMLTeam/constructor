export const enhanceJSON = () => {
  const ids = ["specialLPIds"];

  const debounce = (fn, wait = 300) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  const tryParse = (text) => {
    try {
      JSON.parse(text);
      return true;
    } catch (e) {
      return false;
    }
  };

  const enhance = (ta) => {
    if (!ta) return;

    // Tab inserts two spaces (or a tab char) instead of moving focus
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const value = ta.value;
        const insert = "  ";
        ta.value = value.substring(0, start) + insert + value.substring(end);
        ta.selectionStart = ta.selectionEnd = start + insert.length;
      }

      // auto closing { [ ( " '
      const pairs = {
        "{": "}",
        "[": "]",
        "(": ")",
        '"': '"',
        "'": "'",
      };

      if (!e.ctrlKey && !e.metaKey && !e.altKey && pairs[e.key]) {
        e.preventDefault();
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const open = e.key;
        const close = pairs[e.key];
        const value = ta.value;
        // insert pair and place caret between
        ta.value =
          value.substring(0, start) + open + close + value.substring(end);
        ta.selectionStart = ta.selectionEnd = start + 1;
      }
    });

    // Validate JSON on input (debounced)
    const mark = (valid) => {
      if (valid) ta.classList.remove("json-invalid");
      else ta.classList.add("json-invalid");
    };

    const onInput = debounce(() => {
      const v = ta.value.trim();
      if (v === "") {
        mark(true);
        return;
      }
      const ok = tryParse(v);
      mark(ok);
    }, 350);

    ta.addEventListener("input", onInput);
    // run initial validation
    onInput();
  };

  ids.forEach((id) => enhance(document.getElementById(id)));
};
