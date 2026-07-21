# BridgeHR AI

BridgeHR AI is an AI-assisted workforce identity and compliance workspace for international construction projects. It helps HR and Administration teams monitor passports, visas, work permits and residence documents through a focused dashboard, prioritized risk view and multilingual communication tools.

The current Build Week MVP is a self-contained browser demo. It uses a fictional workforce dataset and does not require an API key, database, package installation or external AI service.

## Project status

- **Current release:** `v0.1.0` public MVP
- **Maintenance focus:** documentation, accessibility and demo stability
- **Data boundary:** synthetic records only; not approved for production HR data

See [PROJECT_STATUS.md](PROJECT_STATUS.md), [ROADMAP.md](ROADMAP.md) and
[CHANGELOG.md](CHANGELOG.md) for the latest maintenance context.

## MVP features

- Compliance dashboard with document and risk indicators
- Searchable workforce document register
- Expiry and missing-document action center
- Natural-language assistant for common compliance questions
- English, French and Chinese renewal-notice generator
- Synthetic CSV export for demo purposes
- Responsive interface suitable for desktop and mobile demonstrations

## Privacy and data safety

**This public repository must never contain real employee or contractor information.** All committed code, seed data, screenshots, videos, logs and documentation must use synthetic or properly anonymized information only.

Do not commit real names, passport or permit numbers, dates of birth, contact details, identity documents, medical information, payroll information, access credentials or exports from operational HR systems. Demo identifiers follow the `DEMO-EMP-###` and `DEMO-*` formats so that fictional values remain obvious.

The MVP is not approved for production HR data. See [PRIVACY.md](PRIVACY.md) for the full contribution and production-boundary rules.

## Run the demo

No installation or environment configuration is required.

1. Clone the repository and enter the project folder.
2. Start a static web server:

```bash
git clone https://github.com/Litaowang-1/BridgeHR-AI.git
cd BridgeHR-AI
python3 -m http.server 4173
```

3. Open `http://localhost:4173` in a modern browser.

Opening `index.html` directly also works for basic use. A local server is
recommended when checking browser behavior consistently.

## Basic validation

This static MVP has no dependency installation or build step. Before opening a
pull request, run:

```bash
git diff --check
node --check app.js
```

Then verify navigation, workforce search and filters, assistant prompts, notice
generation, copy behavior and CSV export in the browser.

## Contributing

Contributions are welcome, especially for accessibility, multilingual wording,
privacy safeguards and international workforce-compliance workflows. Read
[CONTRIBUTING.md](CONTRIBUTING.md), [PRIVACY.md](PRIVACY.md) and
[SECURITY.md](SECURITY.md) before opening a pull request.

## Project structure

```text
BridgeHR-AI/
├── index.html         # Application structure and accessible content
├── styles.css         # Responsive product interface
├── app.js             # Synthetic dataset and demo interactions
├── PROJECT_STATUS.md  # Current release and maintenance focus
├── PRIVACY.md         # Privacy and data-safety requirements
├── SECURITY.md        # Security policy and reporting guidance
└── vercel.json        # Static deployment and security headers
```

## Built with Codex and GPT-5.6

BridgeHR AI is being developed during OpenAI Build Week 2026.

Codex is used to inspect and structure the repository, implement the interface and interactions, test the application, review public artifacts for sensitive information and maintain the project documentation.

GPT-5.6 supports product scoping, workflow design, user-experience decisions, multilingual business wording and the compliance-assistant interaction model.

## Practical MVP plan

1. **Safe demo foundation — completed:** establish synthetic data rules, responsive navigation and a clear product identity.
2. **Core compliance workflow — completed:** make records searchable, surface expiry risks and turn risks into prioritized actions.
3. **AI-assisted experience — completed for demo:** answer controlled natural-language questions and generate multilingual notices without sending data externally.
4. **Validation and public demo — in progress:** test responsive behavior, run a sensitive-data scan, capture synthetic screenshots and deploy the static build.
5. **Post–Build Week:** evaluate secure OCR, role-based access, encrypted storage, audit logs and model integration before handling any operational data.

## Important limitation

The assistant in this MVP uses deterministic, local demo responses. It demonstrates the intended user experience but does not yet call an external AI model. This keeps the public demo safe, predictable and usable without credentials.

## License

Released under the [MIT License](LICENSE).
