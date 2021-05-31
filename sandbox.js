function wait(waitTime) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`Waited for: ${waitTime} ms`);
            resolve();
        }, waitTime)
    );
}

async function serial() {
    console.time("--serial--");
    try {
        await wait(1000);
        await wait(1000);
/*         if (true) {
            throw new Error("Hovsa!");
        } */
        await wait(1000);
    } catch (err) {
        console.log(err);
    }

    console.timeEnd("--serial--");
}

async function parallel() {
    console.time("--parallel--");
    await Promise.all([wait(1000), wait(1000), wait(1000)]);
    console.timeEnd("--parallel--");
}

async function test() {
    await serial();
    console.log("");
    await parallel();
}

test();