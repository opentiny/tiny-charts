# Contributing

We are glad that you are willing to contribute to the OpenTiny HUICharts open source project. There are many forms of contribution, and you can choose one or more of them according to your strengths and interests:

- Report [new defect](https://github.com/opentiny/tiny-charts/issues/new?template=bug-report.yml)
- Provide more detailed information for [existing defects](https://github.com/opentiny/tiny-charts/labels/bug), such as supplementary screenshots, more detailed reproduction steps, minimum reproducible demo links, etc.
- Submit Pull requests to fix typos in the document or make the document clearer and better
- Add the official assistant WeChat `opentiny-official` and join the technical exchange group to participate in the discussion.

When you personally use the OpenTiny HUICharts component library and participate in many of the above contributions, as you become familiar with OpenTiny HUICharts, you can try to do something more challenging, such as:

- Fix defects, you can start with [Good-first issue](https://github.com/opentiny/tiny-charts/labels/good%20first%20issue).
- Implement new features.
- Improve unit testing.
- Translate the document.
- Participate in code review.

## Bug Reports

If you encounter problems in the process of using OpenTiny HUICharts components, you are welcome to submit Issue to us. Before submitting Issue, please read the relevant [official documentation](https://opentiny.design) carefully to confirm whether this is a defect or an unimplemented function.

If it is a defect, select [Bug report](https://github.com/opentiny/tiny-charts/issues/new?template=bug-report.yml) template when creating a new Issue. The title follows the format of `[componentName] defect description`. For example: `[pie-chart] When clicking on the sector area of the pie chart, multiple sectors cannot be selected in sequence`.

Issue that reports defects mainly needs to fill in the following information:

- Version numbers of `@opentiny/huicharts`.
- The performance of the defect can be illustrated by screenshot, and if there is an error, the error message can be posted.
- Defect reproduction step, preferably with a minimum reproducible demo link.

If it is a new feature, select [Feature request](https://github.com/opentiny/tiny-charts/issues/new?template=feature-request.yml) template. The title follows the format of `[componentName] new feature description`. For example: `[pie-chart] When there is very small data in the pie chart, the occupied area is almost 0, which affects the vision, and I hope to increase the setting of the minimum angle.`.

The following information is required for the Issue of the new feature:

- What problems does this feature mainly solve for users?
- What is the api of this feature?

## Pull Requests

Before submitting pull request, please make sure that your submission is in line with the overall plan of OpenTiny HUICharts. Generally, issues that marked as [bug](https://github.com/opentiny/tiny-charts/labels/bug) are encouraged to submit pull requests. If you are not sure, you can create a [Discussion](https://github.com/opentiny/tiny-charts/discussions) for discussion.

### Pull Request Specification

#### Commit Message

The commit message should be in the form of a `type(scope): description of the message`, e.g. `fix(line-chart): fix xxx bug`.

1. type: must be one of build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement.

2. scope:

- The name of the component (lowercase, center dot): e.g.: `line-chart, bar-chart, flow-chart`

#### Pull Request Title

1. The specification of the title is the same as the commit information, which is entered in the form of `type(scope): description information`.

2. Example title:

- Adding new features to the line-chart component:  `feat(line-chart): xxxxxxxxxxxxxxx`
- Fixed bug in line-chart component @opentiny/tiny-charts: `fix(line-chart): xxxxxxxxxxxxxx`
- Supplement line-chart component document: `docs(alert): xxxxxxxxxxxxxxx`
- Supplement line-chart component test case: `test(alert): xxxxxxxxxxxxxx`

#### Pull Request Description

The PR description uses a template, and it is necessary to fill in the relevant information of the PR according to the template, mainly including:

- PR Checklist: Whether the Commit information is compliant with the specifications, whether it supplements the E2E test cases, and whether it supplements the documentation
- PR Type: Bugfix / Feature / Code style update / Refactoring and so on
- Issue Number
- Does this PR introduce a breaking change?

### Local Startup Steps

- Click the Fork button in the upper right corner of the [OpenTiny HUICharts](https://github.com/opentiny/tiny-charts) code repository to Fork the upstream repository to the personal repository.
- Clone personal repository to local.
- Associated with the upstream repository to facilitate the synchronization of the latest code of the upstream repository.
- Run `npm i` under the OpenTiny HUICharts root directory to install node dependencies.
- Run `npm run dev` to launch the component library website.
- Open the browser to visit: [http://localhost:8080/](http://localhost:8080/)

```shell
# You need to replace username with your own user name
git clone git@github.com:username/tiny-charts.git
cd tiny-charts

# Associate upstream repository
git remote add upstream git@github.com:opentiny/tiny-charts.git

# Installation
npm i

# Launch tiny-charts
npm run dev
```

### Submit a PR

- Make sure that you have completed the steps in local startup and can visit [http://localhost:8080/](http://localhost:8080/) normally.
- Ensure that you are currently on the dev branch, and synchronize your dev branch with the latest code from your upstream repository: `git pull upstream dev`.
- Create a new branch from the dev branch `git checkout -b username/feat-xxx` with a suggested branch name of `username/feat-xxx` / `username/fix-xxx`.
- Local coding.
- Local change code is committed to the remote repository, following the [Commit Message Format](https://www.conventionalcommits.org/zh-hans/v1.0.0/) specification for commits, PRs that do not meet the commit specification will not be merged.
```shell
# Staging changes
git add .

# View staged changes
git status

# Commit changes
git commit -m 'feat(line-chart): xxx'

# Commit the changes to the remote repository
git push origin branchName
``` 
- Open the [Pull requests](https://github.com/opentiny/tiny-charts/pulls) link of the OpenTiny HUICharts code repository and click the New pull request button to submit the PR.
- According to the PR template, please provide the following information: PR self-check items, PR type, related Issue ID, whether it is a destructive change.
- Project Committer conducts Code Review and makes comments.
- The PR author adjusts the code according to the opinion. Please note that when a branch initiates PR, the subsequent commit will be synchronized automatically, and there is no need to resubmit the PR.
- Project administrator merges PR.

The contribution process is over, thank you for your contribution!

## Join OpenTiny Community

If you are interested in our open source project, you are welcome to join our open source community in the following ways.

- Add official assistant WeChat: opentiny-official to join our technical exchange group.
- Add to the mailing list: <opentiny@googlegroups.com>

If you have submitted Issue or PR to OpenTiny, you can comment on Issue or Pull Request, asking @all-contributors to add a contributor:

```
@all-contributors please add @<username> for <contributions>
```

For detailed rules, please refer to [https://allcontributors.org/docs/en/bot/usage](https://allcontributors.org/docs/en/bot/usage)
