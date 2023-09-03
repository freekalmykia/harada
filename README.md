# Harada (temporary name for Kamyk twitter)

## web - react spa app

## ssr - next js app

## mobile - react native

Read an article ["A successful Git branching model"](https://nvie.com/posts/a-successful-git-branching-model/)

![Github branching model](https://i.stack.imgur.com/tjJCt.png)

Follow branch naming convention:

- feature is for adding, refactoring or removing a feature
- bugfix is for fixing a bug
- hotfix is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
- test is for experimenting outside of an issue/ticket

```
git branch <category/reference/description-in-kebab-case>
```

Follow commit naming convention:

- feat is for adding a new feature
- fix is for fixing a bug
- refactor is for changing code for peformance or convenience purpose (e.g. readibility)
- chore is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

```
git commit -m '<category: do something; do some other things>'
```

Examples:

- git commit -m 'feat: add new button component; add new button components to templates'
- git commit -m 'fix: add the stop directive to button component to prevent propagation'
- git commit -m 'refactor: rewrite button component in TypeScript'
- git commit -m 'chore: write button documentation'
