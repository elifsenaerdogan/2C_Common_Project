var shell = require('shelljs');

const apps = [];
const port = 5678;

console.log(process.argv[2]);
const projectNames = process.argv[2].split(',');
console.log('projectNames', projectNames);

projectNames.forEach((projectName, i) => {
  var _port = port+(i+1);

  apps.push({
    "name": projectName,
    "port": _port
  });
  shell.exec(`nx serve ${projectName} --port=${_port}`, {cwd: './'}, (error, stdout, stderr) => {
    console.log('error', error);
    console.log('stdout', stdout);
    console.log('stderr', stderr);

  });
});
console.log('apps',apps);
let stringApps = JSON.stringify(apps);


//stringApps = stringApps.replaceAll('"', '\\"');
shell.env["APPS"] = stringApps;
console.log('stringApps',stringApps);
shell.exec(`nx serve dc-mfe-shell --port=${port}`, {cwd: './'}, (error, stdout, stderr) => {
  console.log('error', error);
  console.log('stdout', stdout);
  console.log('stderr', stderr);
});


