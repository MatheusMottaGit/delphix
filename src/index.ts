#!/usr/bin/env node
import { Command } from 'commander'
import { ComponentManager } from './managers/component-manager';

const program = new Command()

program
  .description("say hello")
  .argument("<name>", "component name")
  .option("-c, make --component", "display the component name")
  .action(async (name: string) => {
    const creator = new ComponentManager(name)
    await creator.createComponent()
  });

program.parse(process.argv)