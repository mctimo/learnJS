const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const { languages } = plan.skills;
        const lang = languages.join(' ').toUpperCase();
        return `Мне ${plan.age} и я владею языками: ${lang}`;
    },
};




function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let result = '';
    for (let i in programmingLangs){
        result += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
}
    return result;
};

showExperience(personalPlanPeter);
showProgrammingLangs(personalPlanPeter);

