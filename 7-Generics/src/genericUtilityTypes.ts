/*
* interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Vedat', 'Anna'];

names.push('Manu'); // Error: Property 'push' does not exist on type 'readonly string[]'
names.pop(); // Error: Property 'pop' does not exist on type 'readonly string[]'*/