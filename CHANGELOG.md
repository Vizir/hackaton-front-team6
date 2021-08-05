# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

When a new release is proposed:
- the *Unreleased* section on CHANGELOG.md gets a version number and date
- update the version package.json

## [Unreleased]

### Added

- Created workflow to check PR quality
- Created Copyright license file
- Added ".nvmrc" to fix Node version, and added new command on "package.json"

### Changed

- Corrected ESLint error on local IDEs
- Corrected "docker-compose.yml" mappings to volume ".npmrc"
- Compatibilized "tsconfig.json" with "banking-app-core"
- Bump banking-app-core to 3.4.0
- Avoided unused files on entrypoint

### Removed

- Removed dist folder

## [1.0.0] - 2020-08-20

### Added

- Initial version
