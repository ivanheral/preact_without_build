import ts from 'taskr-servor';
import ex from 'child_process';
const dest = 'dist';

export async function prod(task) {
    await task.source('dist/js/**/*.js').terser().target('bundle/js')
    await task.source('src/html/index.html').target('bundle')
}

export async function html(task) {
    await task.source('src/html/index.html').target(dest)
}

export async function dev(task) {    
    ex.exec("tsc -w");
    await task.parallel(['html']);
    await task.watch('src/html/index.html', 'html');
    ts.start({
        root: dest,
        port: "2000",
    });
}
