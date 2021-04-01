[![CI-CD](https://github.com/CPNV-ES/notice/actions/workflows/s3-deploy.yml/badge.svg)](https://github.com/CPNV-ES/notice/actions/workflows/s3-deploy.yml)

# Notice

Note taking Web app.

## How can I install the project ?

- clone the repo
- npm i
- npm run start

### Run tests

`npm run test`

## How can I debug my code ?

You can use the following debug configuration for vscode.

Put this in your launch.json config file :

```json
{
    "configurations": [
        {
           "name": "Launch Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
``
