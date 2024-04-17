#!/usr/bin/env node
import { Command } from 'commander'
import { ComponentManager } from './managers/component-manager';

const program = new Command()

program
  .description("say hello")
  .argument("<name>", "component name")
  .option("-c, --component", "display the component name")
  .action(async (options) => {
    const creator = new ComponentManager(options.name)
    await creator.createComponent()
  });

program.parse(process.argv)