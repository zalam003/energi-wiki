# Energi Core Documents

## Requirements
- node >=v16.14
- yarn v1.22+

## Local Development

Clone the project and install dependencies.

```sh
git clone git@git.energi.software:energi/tech/dweb/nft/marketplace/documentation.git
cd documentation
yarn
```

For generating a new Docusaurus site using the **classic template**

The classic template will automatically be added to your project after you run the command:

```sh
npx create-docusaurus@latest documents classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

**Start your site**

Run the development server:

```sh
yarn start
```


This builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/. Any further changes will automatically reflect on the served website.

**Additional Commands**
```sh
yarn docusaurus # displays help for docusaurus command
yarn swizzle # for swizzling code blocks, whatever the heck that means
yarn deploy # allows direct deployment to a server if configured
yarn clear # removes any cache for clean build
yarn write-translations # for i18n
yarn write-heading-ids # automatically write heading IDs for hierarchy purposes
```

## Deployment

Build static contents and put it on the website:

```sh
yarn build
yarn serve
```
