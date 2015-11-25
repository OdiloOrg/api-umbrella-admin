#!/usr/bin/env node
var program = require('commander');

program
    .version('0.0.1')
    .command('<CRUD_action> <resource>')
    .description('Executes any CRUD operation over a resource')
    .option( '-f, --file [resourceFile]','A file with a Resource representation to do the action.')
    .action(function (http_verb, resource,resource) {
        console.log('Executing ' + http_verb + 'over ' + resource+ 'represented by '+resourceFile);
    }).parse(process.argv);