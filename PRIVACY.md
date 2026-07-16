# Privacy and Data Safety

BridgeHR AI is currently a public Build Week demonstration. The repository, application, screenshots, recordings, logs and documentation must contain synthetic or anonymized information only.

## Data that must never be committed

- Real employee or contractor names
- Real passport, visa, work permit, residence permit or badge numbers
- Dates of birth, personal contact details or home addresses
- National identifiers, payroll information or medical information
- Scans, photographs or exports taken from operational HR systems
- API keys, passwords, access tokens or private configuration

## Demo-data standard

Every fictional employee identifier uses the `DEMO-EMP-###` format. Every fictional document number begins with `DEMO-`. Demo records must not be copied from, derived from or made traceable to a real person.

Before publishing code or media, contributors should review the complete diff and search for personal or secret data. If there is any doubt about a value, do not commit it.

## Production boundary

This MVP is not approved for production HR data. A production version would require formal access controls, encryption, retention and deletion rules, audit logging, vendor assessment, legal review and a documented incident-response process.
