# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a shared TypeScript types/interfaces library designed to be consumed by multiple projects. It contains only type definitions with no runtime code.

## Commands

- `npm run build` - Compile TypeScript to dist/
- `npm run watch` - Watch mode for development
- `npm run clean` - Remove dist/ directory

## Architecture

- `src/index.ts` - Main entry point, re-exports all types
- `src/` - Organize types by domain (e.g., `user.ts`, `api.ts`, `common.ts`)
- `dist/` - Compiled output with `.d.ts` declaration files

## Usage in Other Projects

Install via npm link (local) or publish to a registry:

```bash
# In this directory
npm link

# In consuming project
npm link @your-org/shared-types
```

Then import types:
```typescript
import { YourType } from '@your-org/shared-types';
```

## Conventions

- Export only types, interfaces, and enums (no runtime code)
- Group related types in separate files by domain
- Re-export everything through `src/index.ts`
