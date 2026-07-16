# Contributing to BridgeHR AI

Thank you for helping improve BridgeHR AI. The project welcomes focused bug
reports, accessibility improvements, translations and proposals for safer HR
compliance workflows.

## Before contributing

1. Open an issue describing the problem or proposed change.
2. Keep each pull request limited to one clear improvement.
3. Use synthetic data only. Never include real employee, contractor or project
   records in code, screenshots, logs, tests or examples.
4. Review [PRIVACY.md](PRIVACY.md) before publishing any artifact.

## Local validation

The current MVP has no build step. Serve the repository with a static web
server, then verify navigation, search, filtering, assistant prompts, notice
generation and CSV export on desktop and mobile widths.

```bash
python3 -m http.server 4173
```

Before committing, run:

```bash
git diff --check
node --check app.js
```

## Scope and safety

This repository is a public demonstration, not a production HR system. Changes
that introduce authentication, external model calls, document processing or
persistent storage must include a security and privacy design before they are
enabled.
