import bs from './server/servor';
const dest = 'dist';
bs.start({
    root: dest,
    port: "2000",
});

export async function js(task) {
    await task.source('src/js/app.js').terser().target(dest);
}

export async function html(task) {
    await task.source('src/html/index.html').target(dest)
}

export async function dev(task) {
    await task.parallel(['html', 'js']);
    await task.watch('src/html/index.html', 'html');
    await task.watch('src/js/**/*.*', 'js');

}
