# Copilot Instructions for `javascript-study-repo`

This repository is a collection of JavaScript study files, organized by topic for hands-on learning and experimentation. The structure is intentionally simple to facilitate focused exploration of language features and patterns.

## Project Structure
- `01_basics/`: Foundational JavaScript concepts (e.g., data types, memory model)
- `functions_js/`: Function-related patterns (anonymous, arrow, callbacks)
- No build system, test framework, or package manager is present; all files are standalone JavaScript scripts.

## Key Conventions
- **File Naming:**
  - Lowercase with underscores for multi-word files (e.g., `stack_heap.js`)
  - Some files may use camelCase (e.g., `dataTypes.js`) for demonstration purposes
- **Directory Organization:**
  - Each folder groups files by concept, not by application or feature
  - No cross-file imports or module systems are used
- **Code Style:**
  - Focus on clarity and simplicity for educational purposes
  - Inline comments are encouraged to explain concepts

## Developer Workflow
- **Run Scripts:**
  - Open any `.js` file and run directly with Node.js: `node <filename>`
  - No build or test commands; scripts are intended for direct execution and experimentation
- **Debugging:**
  - Use VS Code's built-in debugger for step-through exploration
  - No custom debug configurations provided

## Patterns and Examples
- **Callback Functions:**
  - See `functions_js/callBack.js` for examples of passing and invoking callbacks
- **Arrow and Anonymous Functions:**
  - See `functions_js/arrowFunction.js` and `functions_js/anonymousFunction.js`
- **Memory Model:**
  - See `01_basics/stack_heap.js` for stack vs heap illustration

## Guidance for AI Agents
- Focus on generating clear, self-contained JavaScript examples
- When adding new files, follow the existing directory and naming conventions
- Prefer inline explanations over external documentation
- Avoid introducing frameworks, build tools, or external dependencies
- If expanding the repo, create new folders for major topics (e.g., `async_js/` for async patterns)

---
For questions or improvements, review the README or existing file patterns for guidance.
