# Codebase Whisperer

Existing Codebase — Strict Analysis & Editing Instructions

I am uploading a ZIP file containing the existing source code of my website.

This is NOT a request to build a new website from scratch.

Your first priority is to properly inspect, understand, and reconstruct the existing project structure from the uploaded ZIP before making any changes.

1. IMPORTANT — DO NOT START CODING IMMEDIATELY

First, analyze the entire uploaded codebase.

Inspect:

Project structure and folders

package.json and all dependencies

Framework and build configuration

Entry points

Routing

Components

Pages

Layouts

Reusable UI components

CSS / Tailwind configuration

Assets and images

Fonts

Icons

API integrations

Backend-related code, if present

Environment/configuration files

State management

Database integrations, if present

Authentication, if present

Existing responsive behavior

Existing animations and interactions

Existing design system

Existing color palette, typography, spacing, and UI patterns

Understand how the existing website works before modifying anything.

2. THIS IS AN EXISTING PROJECT

Treat the uploaded ZIP as the source of truth.

DO NOT:

Rebuild the website from scratch

Replace the existing architecture unnecessarily

Create a completely new design

Remove existing functionality without my permission

Replace working components with unnecessary alternatives

Change the technology stack

Install unnecessary dependencies

Rewrite large sections of the project without a clear reason

Delete existing assets

Change existing routes unless explicitly requested

Preserve the existing implementation wherever possible.

3. CODEBASE RECONSTRUCTION

If some project metadata or configuration is missing because this project was downloaded as a ZIP, determine what is required to run the project correctly.

If something important is missing or ambiguous, do not guess blindly.

Identify the issue and explain what is missing before making destructive assumptions.

4. EXISTING DESIGN MUST BE PRESERVED

Before implementing my requested changes, understand the current visual language of the website.

Preserve the existing:

Brand identity

Color system

Typography

Component styling

Spacing system

Border radius

Shadows

Buttons

Navigation

Cards

Responsive behavior

Animations

Overall visual hierarchy

Unless I specifically ask you to change these.

5. BEFORE EVERY EDIT

When I give you a change request:

Locate the relevant files/components.

Understand how those components currently work.

Determine the minimum required changes.

Reuse existing components and styles whenever possible.

Implement the requested change without unnecessarily affecting unrelated parts.

Check for errors and broken imports.

Check responsive behavior.

Verify that existing functionality still works.

6. DO NOT MAKE UNREQUESTED CHANGES

Only modify what is necessary for my requested task.

If you notice unrelated issues, do not automatically redesign or refactor them.

Instead, mention them separately and wait for my instruction.

7. CODE QUALITY

All modifications must follow the existing project's coding conventions.

Use:

Clean component architecture

Reusable components

Maintainable code

Proper TypeScript types where applicable

Semantic HTML

Responsive design

Accessible UI patterns

Existing dependencies whenever possible

Avoid unnecessary duplication.

8. IMPORTANT — PRESERVE FUNCTIONALITY

Before modifying anything, assume that existing functionality is intentional.

Do not break:

Navigation

Forms

Buttons

Links

API calls

Authentication

Database functionality

Existing integrations

Mobile responsiveness

Existing animations

Existing pages

If a requested change conflicts with existing functionality, explain the conflict before making a destructive change.

9. FIRST RESPONSE AFTER ZIP UPLOAD

After analyzing the ZIP, DO NOT immediately start making random changes.

First give me a concise technical summary containing:

Framework

Main technologies

Folder structure

Main pages

Important components

Styling system

Dependencies

Integrations

Any missing configuration

Any potential issues you discovered

Then confirm that you have understood the existing codebase and are ready for my specific editing instructions.

10. FUTURE EDITING INSTRUCTIONS

After the initial analysis, I will give you individual changes one by one.

For every change, follow this rule:

Understand → Locate → Modify → Verify → Report

Do not rebuild existing functionality unless I explicitly ask you to.

The goal is to continue developing this exact existing website, not create a replacement.

Treat the uploaded ZIP as an existing production codebase and make careful, minimal, professional changes.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3287014e-879f-4a16-bec7-54411be68507).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
