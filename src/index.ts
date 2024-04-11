#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'node:fs/promises'
import path from 'node:path'
import { setFileContent } from './lib/files';

const program = new Command()

program
  .description("say hello")
  .option("-c, --create <type>", "Component name")
  .action(async (options) => {
    if(!options.name) {
      console.log("It's necessary to set a name to your component!")
      process.exit(1)
    }

    const componentContent = setFileContent(options.name);

    const componentsFolder = path.join(__dirname, 'src', 'components')

    const createdComponentPath = path.join(componentsFolder, `${options.name}.tsx`)
    
    try {
      await fs.mkdir(componentsFolder, { recursive: true })
      await fs.writeFile(createdComponentPath, componentContent)
      
    } catch (error) { 
      console.log(error)
    }
  });

program.parse(process.argv)