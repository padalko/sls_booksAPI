<!-- cspell:ignore commitlint, commitlintrc -->

# Contributing

We'd love for you to contribute to our source code and to make our project even
better than it is today! Here are the guidelines we'd like you to follow:

- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)
- [Merging](#merge)

## <a name="issue"></a> Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can
help us by submitting an issue to respective GitHub repository. Even better you
can submit a Pull Request with a fix.

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue

Before you submit your issue search the archive, maybe your question has been already
answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features, by not reporting duplicate issues.

### Submitting a Pull Request

Before you submit your pull request consider the following guidelines:

- Search [GitHub repository](https://github.com/filmdb-io/functions/issues) for
  an open or closed Pull Request that relates to your submission. You don't want
  to duplicate effort.
- Make your changes in a new branch:

  ```shell
  git checkout -b my-branch master
  ```

- Follow our [Coding Rules](#rules).
- Avoid large Pull Requests.
- Do not introduce technical debt.
- Add an entry in a [decision log](./decisions/README.md) for major changes.
- Run the full project's test suite and ensure that all tests pass.
- Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit).
- Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

In GitHub, send a Pull Request to a `master` branch. If we suggest changes,
then:

- Make the required updates.
- Re-run the test suite to ensure tests are still passing.
- Commit your changes to your branch (e.g. `my-branch`).
- Push the changes to GitHub repository (this will update your Pull Request).

If the PR gets too outdated we may ask you to merge and push to update the PR:

```shell
git fetch upstream
git merge upstream/master
git push origin my-fix-branch
```

That's it! Thank you for your contribution!

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as
you are working:

- All features or bug fixes **must be tested** by one or more unit tests.
- All API methods **must be documented** using JSDoc. To see how we document our
  APIs, please check out the existing source code.
- This repository contains `.editorconfig` file, which configures IDE code
  formatting. **Do not override these settings**.

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.
This leads to **more readable messages** that are easy to follow when looking
through the **project history**. It is mandatory to use correct, precise and
descriptive commit messages. Those messages are used for multiple reasons, by
both technical and non-technical people, e.g. in Changelogs, during routine
audits and for project management.

The commit messages must be added through the use of a CLI wizard
([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run
`npm run cz` in your terminal after staging your changes in git.

Commit message consists of four parts:

- type
- scope
- description
- long description

Regularly, only two of the above should be used: type and description.

### Type

Must be one of the following:

- **feat**: A new feature.
- **fix**: A bug fix.
- **improvement**: An improvement to a current feature.
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing or correcting existing tests.
- **build**: Changes that affect the build system or external dependencies
  (example scopes: gulp, broccoli, npm).
- **ci**: Changes to our CI configuration files and scripts (example scopes:
  Travis, Circle, BrowserStack, SauceLabs).
- **chore**: Changes to the build process or auxiliary tools and libraries such
  as documentation generation.
- **revert**: Reverts a previous commit.

### Scope

Developers should refrain from using the scope. It must not be treated as a
default. Adding a scope must provide meaningful value for a scenario where it is
used.

A correct usage of scope is where a set of PRs contribute to a common, well
defined goal and those commits do not bring value on their own, only the
combination of those is meaningful.

Scopes must be pre-defined in [commitlint configuration](./.commitlintrc.yaml).

### Description

The description contains succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Do not capitalize first letter.
- Do not place a dot (.) at the end.

Messages must be explicit, clear and understandable for anyone, especially for
external people not familiar with the project.

### Long description

Long description should be used when it is not possible to accurately describe
the change only by the use of the regular description.

Just as in the **subject**, use the imperative, present tense: "change" not
"changed" nor "changes". The body should include the motivation for the change
and contrast this with previous behavior.

### Footer

Footer is automatically generated by Commitizen and must not be modified
manually.

The footer contains any information about **Breaking Changes** and is also the
place to reference GitHub issues that this commit closes.

**Breaking Changes** start with the word `BREAKING CHANGE:` with a space or two
newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, the commit must:

- Have a `revert` type. In this case, it is allowed to exceed maximal allowed
  length of a title.
- Not have a scope.
- Have an original header as a description.
- Have `This reverts commit <long hash>.` in long description, where the hash is
  the SHA of the commit being reverted.

In an emergency, it is allowed to create a revert PR through GitHub UI. When
doing so, ensure to:

- Change a capital letter in `Revert` to lower case (`revert`).
- Add a colon after `revert`, so that it becomes `revert:`.
- Remove quotes (`"`) surrounding the message of a commit being reverted.
- Ensure an entire message of a commit being reverted is in the title of the PR.
  For long messages, it can sometimes be split between the title and the body.
- Ensure that `This reverts commit <long hash>.` is the first line in the body
  of a PR.

Correct example:

```
revert: test(dependency): cover all payment rejection reasons

This reverts commit b8dcaebc876b4957eb6ce85f.
```

Incorrect example (quoted description):

```
revert: "test(dependency): cover all payment rejection reasons"

This reverts commit b8dcaebc876b4957eb6ce85f.
```

Incorrect example (no dot at the end of long description):

```
revert: test(dependency): cover all payment rejection reasons

This reverts commit b8dcaebc876b4957eb6ce85f
```

Incorrect example (short hash):

```
revert: test(dependency): cover all payment rejection reasons

This reverts commit b8dcaef.
```

## <a name="merge"></a> Merging

We always use squash merges to keep our **project history** tidy and concise.

Like any other commit, merge commit messages must follow the
[Commit Message Guidelines](#commit). We use titles of PRs as commit messages,
therefore approval of a PR is also an approval of a commit message.

The commit message must not include the PR number suffix and must not include
the list of all commits in the body. The PR numbers must not be included to keep
git history free from relations to a hosting provider.

All branches with no commits ahead of master must be removed.
