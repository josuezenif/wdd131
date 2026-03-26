let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Ankara Messi" },
        { section: "002", enrolled: 80, instructor: "Cristiano Wobaldo SUI" }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${aCourse.code}, ${aCourse.title}`;
}

function renderSections() {
    document.querySelector("#sections").innerHTML = `${aCourse.sections}`;
}

