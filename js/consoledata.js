var studentDataFields = [
    {
        label: "sex",
        description: "Sex",
        evaluate: (data) => {
            if (data.toLowerCase() === "f") {
                return "Female"
            } else if (data.toLowerCase() === "m") {
                return "Male"
            }
        }
    },
    {
        label: "age",
        description: "Age",
        evaluate: (data) => {
            return data
        }
    },
    {
        label: "famsize",
        description: "Family size",
        evaluate: (data) => {
            if( data === "LT3" ) {
                return "Less than or equal to 3"
            } else if (data === "GT3") {
                return "Greater than 3"
            }
        }
    },
    {
        label: "Pstatus",
        description: "Parents' cohabitation status",
        evaluate: (data) => {
            if (data === "T") {
                return "Living together"
            } else {
                return "Living apart"
            }
        }
    },
    {
        label: "Medu",
        description: "Mother's education",
        evaluate: (data) => {
            if (data == "0") {
                return "None"
            } else if (data == "1") {
                return "Primary education"
            } else if (data == "2") {
                return "Secondary education"
            } else if (data >= "3") {
                return "Higher education"
            }
        }
    },
    {
        label: "Fedu",
        description: "Father's education",
        evaluate: (data) => {
            if (data == "0") {
                return "None"
            } else if (data == "1") {
                return "Primary education"
            } else if (data == "2") {
                return "Secondary education"
            } else if (data >= "3") {
                return "Higher education"
            }
        }
    },
    {
        label: "Mjob",
        description: "Mother's job",
        evaluate: (data) => {
            if( data == "health") {
                return "Health"
            } else if (data == "services") {
                return "Civil Services"
            } else if(data == "athome") {
                return "Stay at home"
            } else if(data == "other") {
                return "Other"
            } else if(data == "teacher") {
                return "Teacher"
            }
        }
    },
    {
        label: "Fjob",
        description: "Father's job",
        evaluate: (data) => {
            if( data == "health") {
                return "Health"
            } else if (data == "services") {
                return "Civil Services"
            } else if(data == "athome") {
                return "Stay at home"
            } else if(data == "other") {
                return "Other"
            } else if(data == "teacher") {
                return "Teacher"
            }
        }
    },
    {
        label: "reason",
        description: "Reason to choose this school",
        evaluate: (data) => {
            if( data == "home") {
                return "Close to home"
            } else if (data == "reputation") {
                return "School reputation"
            } else if(data == "course") {
                return "Course preference"
            } else if(data == "other") {
                return "Other"
            }
        }
    },
    {
        label: "guardian",
        description: "Guardian",
        evaluate: (data) => {
            if( data == "mother") {
                return "Mother"
            } else if (data == "father") {
                return "Father"
            } else if(data == "other") {
                return "Other"
            }
        }
    },
    {
        label: "traveltime",
        description: "Home to school travel time",
        evaluate: (data) => {
            if (data == "1") {
                return "Less than 15 minutes"
            } else if (data == "2") {
                return "15 - 30 minutes"
            } else if (data == "3") {
                return "30 minutes to 1 hour"
            } else if (data >= "4") {
                return "More than an hour"
            }
        }
    },
    {
        label: "studytime",
        description: "Weekly study time",
        evaluate: (data) => {
            if (data == "1") {
                return "Less than 2 hours"
            } else if (data == "2") {
                return "2 to 5 hours"
            } else if (data == "3") {
                return "5 to 10 hours"
            } else if (data >= "4") {
                return "More than 10 hours"
            }
        }
    },
    {
        label: "failures",
        description: "Number of past class failures",
        evaluate: (data) => {
            return data
        }
    },
    {
        label: "schoolsup",
        description: "Extra educational support",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "2") {
                return "No"
            }
        }
    },
    {
        label: "famsup",
        description: "Family educational support",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "2") {
                return "No"
            }
        }
    },
    {
        label: "paid",
        description: "Extra paid classes within the course subject",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "activities",
        description: "Extra-curricular activities",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "nursery",
        description: "Attended nursery school",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "higher",
        description: "Wants to take higher education",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "internet",
        description: "Access to internet at home",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "romantic",
        description: "In a romantic relationship",
        evaluate: (data) => {
            if (data == "1") {
                return "Yes"
            } else if (data == "0") {
                return "No"
            }
        }
    },
    {
        label: "famrel",
        description: "Quality of family relationships",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very bad"
            } else if (data == "2") {
                return "Bad"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "Good"
            } else if (data == "5") {
                return "Very good"
            }
        }
    },
    {
        label: "freetime",
        description: "Free time after school",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very low"
            } else if (data == "2") {
                return "Low"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "High"
            } else if (data == "5") {
                return "Very high"
            }
        }
    },
    {
        label: "goout",
        description: "Social events with friends",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very low"
            } else if (data == "2") {
                return "Low"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "High"
            } else if (data == "5") {
                return "Very high"
            }
        }
    },
    {
        label: "Dalc",
        description: "Workday alcohol consumption",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very low"
            } else if (data == "2") {
                return "Low"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "High"
            } else if (data == "5") {
                return "Very high"
            }
        }
    },
    {
        label: "Walc",
        description: "Weekend alcohol consumption",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very low"
            } else if (data == "2") {
                return "Low"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "High"
            } else if (data == "5") {
                return "Very high"
            }
        }
    },
    {
        label: "health",
        description: "Current health status",
        evaluate: (data) => {
            if ( data == "1" ) {
                return "Very bad"
            } else if (data == "2") {
                return "Bad"
            } else if (data == "3") {
                return "Average"
            } else if (data == "4") {
                return "Good"
            } else if (data == "5") {
                return "Very good"
            }
        }
    },
    {
        label: "absences",
        description: "Number of school absences",
        evaluate: (data) => {
            return data
        }
    },
    {
        label: "G1",
        description: "First semester grade",
        evaluate: (data) => {
            data = Number(data)*5

            if ( data >= "97") {
                return "A+"
            } else if ( data >= "93") {
                return "A"
            } else if (data >= "90") {
                return "A-"
            } else if (data >= "87") {
                return "B+"
            } else if (data >= "83") {
                return "B"
            } else if (data >= "80") {
                return "B-"
            } else if (data >= "77") {
                return "C+"
            } else if (data >= "73") {
                return "C"
            } else if (data >= "70") {
                return "C-"
            } else if (data >= "67") {
                return "D+"
            } else if (data >= "65") {
                return "D"
            } else if (data < "65") {
                return "F"
            }
        }
    },
    {
        label: "G2",
        description: "Second semester grade",
        evaluate: (data) => {
            data = Number(data)*5

            if ( data >= "97") {
                return "A+"
            } else if ( data >= "93") {
                return "A"
            } else if (data >= "90") {
                return "A-"
            } else if (data >= "87") {
                return "B+"
            } else if (data >= "83") {
                return "B"
            } else if (data >= "80") {
                return "B-"
            } else if (data >= "77") {
                return "C+"
            } else if (data >= "73") {
                return "C"
            } else if (data >= "70") {
                return "C-"
            } else if (data >= "67") {
                return "D+"
            } else if (data >= "65") {
                return "D"
            } else if (data < "65") {
                return "F"
            }
        }
    }
]