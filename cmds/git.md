## Git Setup & Configuration

- git config --global user.name "Your Name" – Set global username.
- git config --global user.email "you@example.com" – Set global email.
- git config --global core.editor "vim" – Set default text editor.
- git config --global init.defaultBranch main – Set the default branch name to main.
- git config --list – Show all configured Git settings.
- git config --global alias.st status – Create an alias (git st for git status).
- git help <command> – Get help for a specific command.
- git version – Check installed Git version.

## Repository Initialization & Cloning

- git init – Initialize a new Git repository.
- git clone <repository-url> – Clone an existing repository.
- git clone --depth=1 <repository-url> – Clone only the latest commit (shallow clone).
- git clone --branch <branch> <repository-url> – Clone a specific branch.

## Checking Status & Logs

- git status – Show the current state of the working directory.
- git log – View commit history.
- git log --oneline – View a compact commit history.
- git log --graph --decorate --oneline – View a visual representation of commits.
- git log --author="Your Name" – View commits by a specific author.
- git log -p -2 – View the last two commits with patch details.
- git reflog – Show the history of HEAD changes.
- git shortlog -s -n – Summarize commit history by author.

## Staging & Committing

- git add <file> – Add a specific file to the staging area.
- git add . – Add all files to the staging area.
- git commit -m "message" – Commit changes with a message.
- git commit -a -m "message" – Commit all modified files directly.
- git commit --amend -m "new message" – Amend the last commit message.
- git commit --no-edit – Amend the last commit without changing the message.

## Branching & Merging

- git branch – List all local branches.
- git branch <branch-name> – Create a new branch.
- git checkout <branch> – Switch to another branch.
- git checkout -b <branch> – Create and switch to a new branch.
- git branch -d <branch> – Delete a local branch.
- git branch -D <branch> – Force delete a local branch.
- git merge <branch> – Merge a branch into the current branch.
- git merge --no-ff <branch> – Merge a branch without fast-forwarding.
- git rebase <branch> – Rebase the current branch onto another branch.
- git rebase -i HEAD~3 – Interactive rebase for the last 3 commits.

## Remote Repositories

- git remote -v – Show remote repository URLs.
- git remote add origin <url> – Add a remote repository.
- git fetch – Fetch updates from the remote repository.
- git pull – Fetch and integrate changes from the remote repository.
- git pull --rebase – Pull changes and rebase the local branch.
- git push – Push local commits to the remote repository.
- git push -u origin <branch> – Push a branch and set upstream tracking.
- git push --force – Force push changes (use with caution).
- git remote remove <name> – Remove a remote repository.
- git remote rename <old-name> <new-name> – Rename a remote.

## Undoing Changes

- git reset HEAD <file> – Unstage a file.
- git reset --soft <commit> – Reset to a previous commit, keeping changes.
- git reset --mixed <commit> – Reset to a previous commit, keeping changes unstaged.
- git reset --hard <commit> – Reset to a previous commit and discard all changes.
- git revert <commit> – Create a new commit that undoes a previous commit.
- git checkout -- <file> – Discard changes in a file.

## Stashing & Cleaning

- git stash – Temporarily save uncommitted changes.
- git stash pop – Apply the last stashed changes and remove them from the stash.
- git stash list – List all stashed changes.
- git stash drop – Delete the last stash.
- git clean -f – Remove untracked files.
- git clean -df – Remove untracked files and directories.

## Comparing & Viewing Changes

- git diff – Show unstaged changes.
- git diff --staged – Show staged changes.
- git diff HEAD~1 – Compare the last commit with the previous one.
- git diff <branch1> <branch2> – Compare two branches.

## Tags & Releases

- git tag – List all tags.
- git tag <tag-name> – Create a new tag.
- git tag -a <tag-name> -m "message" – Create an annotated tag.
- git push --tags – Push all local tags to the remote repository.
- git checkout tags/<tag-name> – Checkout a specific tag.

## Advanced Git Commands

- git cherry-pick <commit> – Apply a specific commit from another branch.
- git bisect start – Start a binary search to find a bug-causing commit.
- git bisect bad – Mark a commit as bad during bisecting.
- git bisect good – Mark a commit as good during bisecting.
- git blame <file> – Show who last modified each line of a file.
- git show <commit> – Show details of a specific commit.
- git worktree add <dir> <branch> – Create a new working tree.
- git grep "text" – Search for text in the repository.

## Managing Submodules

- git submodule add <url> – Add a submodule.
- git submodule update --init --recursive – Initialize and update submodules.
- git submodule deinit -f <submodule> – Deinitialize a submodule.

## Security & Cleanup

git fsck – Check the repository for errors.
git gc – Clean up unnecessary files and optimize the repository.

## Git Aliases & Shortcuts

- git alias – Set custom Git command shortcuts.
- git push --dry-run – Simulate a push without making changes.

## Miscellaneous

- git archive -o archive.zip HEAD – Create a zip archive of the current repository.
- git rerere – Automatically resolve previously resolved merge conflicts.
- git update-index --assume-unchanged <file> – Mark a file as unchanged.
