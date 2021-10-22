<script>
    import JSONFormatter from 'json-formatter-js';
    import { onMount } from 'svelte'

    const aboutInfo = {
        name : "Josh Barbee",
        personal_info: {
            age : 19,
            email : "joshbarbee1@gmail.com",
            location : "Cincinnati, OH",
            phone : "513-260-3720",
        },
        education : 
        [
            {
                school : "The Ohio State University",
                start_date : "Aug 2020",
                end_date : "May 2023",
                degree : "Bachelors of Science in Computer Science and Engineering",
                gpa : "3.8",
                achievements : [
                    "Dean's List (2020 - 2021)"
                ],
                relevant_coursework : [
                    {
                        course: 'CSE 2221',
                        name: 'Software 1',
                        taken: 'Fall 2020',
                        scope: 'Introduction to OOP through the Java language.'
                    },
                    {
                        course: 'CSE 2231',
                        name: 'Software 2',
                        taken: 'Spring 2021',
                        scope: 'Continuation of the software sequence. Introduces various data structures such as stacks, queues, linked lists, etc.'
                    },
                    {
                        course: 'CSE 2421',
                        name: 'Systems 1',
                        taken: 'Fall 2021',
                        scope: 'Introduction to low-level programming in C and x86-64 Assembly.'
                    },
                    {
                        course: 'STAT 5301',
                        name: 'Intermediate Data Analytics 1',
                        taken: 'Fall 2021',
                        scope : 'Introduction of the R programming language and data analysis using various statistical tools.'
                    },
                    {
                        course: 'CSE 2321',
                        name: 'Foundations 1',
                        taken: 'Fall 2020',
                        scope: 'Analysis of algorithms using Big-O notation and a foray into graph theory.'
                    },
                    {
                        course: 'CSE 2331',
                        name: 'Foundations 2',
                        taken: 'Fall 2021',
                        scope: 'In-depth analysis of recursive and iterative algorthims. Introduction to various tree-based structures such as binary trees / red-black trees.'
                    }
                ]
            },
            {
                school : "Carnegie Mellon University",
                start_date : "June 2019",
                end_date : "Aug 2019",
                degree : "N/A",
                gpa : "4.0",
                note : "*This was an accelerated program in the summer to offer college-level courses to high school students"
            }
        ], 
        work_experiences : [
            {
                company : "London Computer Systems (LCS)",
                position : "Software QA Intern",
                start_date : "May 2021",
                end_date : "Aug 2021",
                responsilbilties : [
                    "Facilitated the creation of testing plans and conducted extensive testing on various web-based platforms, accelerated via the usage of automation solutions such as Katalon and Selenium.",
                    "Developed and delivered Steps to Reproduce along with other documentation, to developers after potential bugs were encountered, while following the Agile process framework.",
                    "Researched XSS-based input fuzzing on various client-facing platforms and addressed sources of concern."
                ]
            },
            {
                company : "FoodForest",
                position : "Software Developer Intern",
                start_date : "May 2020",
                end_date : "Aug 2020",
                responsilbilties : [
                    "Leveraged NodeJS and Express to develop a REST API microservice, interfacing with company APIs and with various Fortune 500 retailers.",
                    "Developed automation solutions via Python and Pandas to extract and parse vendor order information and generate invoices for both clients and vendors, reducing time waste by 90%."
                ]
            },
            {
                company : "10XTS",
                position : "DevOps Intern",
                start_date : "May 2018",
                end_date : "Aug 2018",
                responsilbilties : [
                    "Automated AWS server provisioning and management via Ansible and Python’s Boto3 library.",
                    "Developed dedicated server configurations for both Apache-based web servers and SQL-based databases.",
                    "Researched automation of TLS certificate generation via leveraging LetsEncrypt."
                ]
            }
        ]
    };



    onMount(() =>{
        const formatter = new JSONFormatter(aboutInfo);
        let json_parent = document.getElementById("about-text-body-id");
        let formatted_html = formatter.render();

        let arr = formatted_html.getElementsByTagName("span");

        for(let elem of arr){
            elem.style.whiteSpace = "initial";
        }
    
        json_parent.append(formatted_html);

        });
</script>

<div class = "wrapper">
    <div class = "container" id = "about">
        <div class = "row">
            <div class = "col s12 m4" id = "pfp-image">
                <img class = "materialboxed" src = "images/josh_pfp.png" alt = "Josh headshot">
            </div>
            <div class = "col s12 m8 about-text"> 
                <h1 class = "about-text-header">
                    About Me
                </h1>     
                <div class = "about-text-body" id = "about-text-body-id">
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    #pfp-image{
        padding: var(--default-padding);
        background-color: white;
    }

    .wrapper {
        padding-top: var(--default-padding);
        padding-bottom: var(--default-padding);
        background-color: var(--tertiary-color);
        margin: var(--large-margin);
    }

    .container {
        margin: var(--default-margin);
        width: 100%;
    }

    img {
        max-width: 100%;
        margin: 0 auto;
        border-radius: 50%;
    }

    .row {
        display: flex;
    }

    .about-text {
        background-color: white;
        text-align: center;
        padding-bottom: var(--default-padding);
    }

    .about-text-body {
        font-size: 14px;
        font-family: 'Courier New', Courier, monospace;
        text-align: left;
        padding: var(--default-padding);
        padding-top: 0;
    }

    .about-text-header {
        font-size: 3.5em;t-align: center;
        padding-bottom: var(--default-padding);
    }

    .about-text-body {
        font-size: 14px;
        font-family: 'Courier New', Courier, monospace;
        text-align: left;
        padding: var(--default-padding);
        padding-top: 0;
    }

    .about-text-header {
        font-size: 3.5em;
        font-family: 'Ubuntu', sans-serif;
        margin: 0 auto;
        padding: var(--default-padding)
    }

    .col {
        padding: 0;
    }


    @media only screen and (max-width: 600px){
        .row {
            margin: 0 auto;
            display: block;
        }

        .container {
            width: 100%;
        }

        img {
            max-width: 60%;
        }

        #pfp-image {
            padding: 12px;
        }

        #about-text-body-id {
            padding: 12px;
        }
    }
</style>

