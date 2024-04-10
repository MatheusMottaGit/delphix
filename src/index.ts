#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program
  .description("say hello")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(`Hey, ${options.name}!`);
  });

program.parse(process.argv)