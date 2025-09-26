import
 pkg from '../../package.json';

// import worker from '@humancatfood/l-system-worker';

// console.log({ worker });

// worker.greet();

console.log(
	`%c${pkg.name}%c v%c${pkg.version}`,
	'color: #4CAF50; font-weight: bold; font-size: 14px;',
	'color: #333;',
	'color: #2196F3; font-weight: bold;'
);

export const prerender = true;
