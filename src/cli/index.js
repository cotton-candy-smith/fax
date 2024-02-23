const { Command } = require('commander');
const { name, version } = require('/package.json');

const program = new Command();

program
  .name(name)
  .description('Go on charlie wonka.')
  .version(version);

program.command('parse')
  .description('Parse a string into common chemitry elements')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, options) => {
    // console.log(options.debug);
  });
  
program.parse();