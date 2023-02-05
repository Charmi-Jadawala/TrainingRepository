--CATEGORY
INSERT INTO Category VALUES
('Data Science', 425, DEFAULT),
('Business', 1095, DEFAULT),
('Computer Science', 668, DEFAULT),
('Health', 471, DEFAULT),
('Social Sciences', 401, DEFAULT),
('Personal Development', 137, DEFAULT),
('Arts and Humanities', 338, DEFAULT),
('Physical Science and Engineering', 413, DEFAULT),
('Language Learning', 150, DEFAULT),
('Information Technology', 145, DEFAULT),
('Math and Logic', 70, DEFAULT);


-- SUBCATEGORY
INSERT INTO SubCategory VALUES
('Data Analysis', 1, DEFAULT),
('Machine Learning', 1, DEFAULT),
('Probability And Statistics', 1, DEFAULT),
('Leadership And Management', 2, DEFAULT),
('Finance', 2, DEFAULT),
('Marketing', 2, DEFAULT),
('Entrepreneurship', 2, DEFAULT),
('Business Essentials', 2, DEFAULT),
('Business Strategy', 2, DEFAULT),
('Software Development', 3, DEFAULT),
('Mobile And Web Development', 3, DEFAULT),
('Algorithms', 3, DEFAULT),
('Computer Security And Networks', 3, DEFAULT),
('Design And Product', 3, DEFAULT),
('Animal Health', 4, DEFAULT),
('Basic Science', 4, DEFAULT),
('Health Informatics', 4, DEFAULT),
('Healthcare Management', 4, DEFAULT),
('Nutrition', 4, DEFAULT),
('Patient Care', 4, DEFAULT),
('Public Health', 4, DEFAULT),
('Research', 4, DEFAULT),
('Psychology', 4, DEFAULT),
('Economics', 5, DEFAULT),
('Education', 5, DEFAULT),
('Governance And Society', 5, DEFAULT),
('Law', 5, DEFAULT),
('Personal Development', 6, DEFAULT),
('History', 7, DEFAULT),
('Music And Art', 7, DEFAULT),
('Philosophy', 7, DEFAULT),
('Electrical Engineering', 8, DEFAULT),
('Mechanical Engineering', 8, DEFAULT),
('Chemistry', 8, DEFAULT),
('Environmental Science And Sustainability', 8, DEFAULT),
('Physics And Astronomy', 8, DEFAULT),
('Research Methods', 8, DEFAULT),
('Learning English', 9, DEFAULT),
('Other Languages', 9, DEFAULT),
('Cloud Computing', 10, DEFAULT),
('Security', 10, DEFAULT),
('Data Management', 10, DEFAULT),
('Networking', 10, DEFAULT),
('Support And Operations', 10, DEFAULT),
('Math and Logic', 11, DEFAULT);


-- USER
--INSERT INTO [User] VALUES
--('Charmi Jadawala', 'charmijadawala1690@gmail.com', 'Charmi@16', 'Learner'),
--('Disha Bhatt', 'dishabhatt18@gmail.com', 'Disha_180', 'Learner'),
--('Laurie Santos', 'lauriesantos@yahoo.com', 'LaurieSantos@1618', 'Instructor'),
--('Gopi Modi', 'gopi22@gmail.com', 'Gopi2278', 'Admin'),
--('George Siedel', 'georgesiedel@gmail.com', 'georges', 'Instructor'),
--('Jennifer Mathew', 'jenniferm00@gmail.com', 'jennym00', 'Admin');


-- APPLICATION_OBJECT
INSERT INTO ApplicationObject VALUES
('Duration'),
('Level'),
('Language'),
('Skill');


-- APPLICATION_OBJECT_VALUES
INSERT INTO ApplicationObjectValues VALUES
(1, '3-6 Months'),
(1, '6-12 Months'),
(1, '1-4 Years'),
(1, 'Less Than 2 Hours'),
(1, '1-4 Weeks'),
(1, '1-3 Months'),
(2, 'Beginner'),
(2, 'Intermediate'),
(2, 'Advanced'),
(2, 'Mixed'),
(3, 'English'),
(3, 'Hindi'),
(3, 'Gujarati'),
(3, 'French'),
(3, 'Spanish'),
(3, 'Bengali'),
(3, 'Chinese'),
(3, 'Dutch'),
(3, 'Tamil'),
(3, 'Telugu'),
(3, 'Portuguese'),
(3, 'Vietnamese'),
(4, 'Algebra'),
(4, 'Analysis'),
(4, 'Apache'),
(4, 'Account Management'),
(4, '3d Modeling'),
(4, 'Amazon Web Services'),
(4, 'Applied Mathematics'),
(4, 'Biology'),
(4, 'Big Data'),
(4, 'Bioinformatics'),
(4, 'BlockChain'),
(4, 'Calculus'),
(4, 'C Sharp (Programming Language)'),
(4, 'Case Study'),
(4, 'Cloud Computing'),
(4, 'Data Structures'),
(4, 'Data Security'),
(4, 'Economics'),
(4, 'Encryption'),
(4, 'Financial Data Analysis'),
(4, 'Geometry'),
(4, 'HTML and CSS'),
(4, 'Internet Of Things'),
(4, 'Linear Algebra'),
(4, 'Market Analysis'),
(4, 'Object-Oriented Programming'),
(4, 'Probability & Statistics'),
(4, 'Regression Analysis'),
(4, 'Software Engineering'),
(4, 'Web Development'),
(4, 'Gratitude'),
(4, 'Happiness'),
(4, 'Meditation'),
(4, 'Savoring'),
(4, 'Understanding of Testing Theory'),
(4, 'Writing Tests'),
(4, 'Testing Vocabulary');


-- COURSE
INSERT INTO Course VALUES 
('The Science of Well-Being', 6, 28, 6, 'Yale University', 
'For more than 300 years, Yale University has inspired the minds that inspire the world. Based in New Haven, Connecticut, Yale brings people and ideas together for positive impact around the globe. A research university that focuses on students and encourages learning as an essential way of life, Yale is a place for connection, creativity, and innovation among cultures and across disciplines.',
11, 0, '2021-07-22', '2022-08-09', 10, 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661145946/Courses/course-1_yrgcz8.jpg', 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-2_anbryu.jpg', 4.9, 33347, 4031167,
'<p>In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>
<p>THE SCIENCE OF WELL BEING WAS PRODUCED IN PART DUE TO THE GENEROUS FUNDING OF THE DAVID F. SWENSEN FUND FOR INNOVATION IN TEACHING.</p>',
DEFAULT),

('Finding Purpose and Meaning In Life: Living for What Matters Most', 3, 10, 5, 'University of Minnesota',
'The University of Minnesota is among the largest public research universities in the country, offering undergraduate, graduate, and professional students a multitude of opportunities for study and research. Located at the heart of one of the nation’s most vibrant, diverse metropolitan communities, students on the campuses in Minneapolis and St. Paul benefit from extensive partnerships with world-renowned health centers, international corporations, government agencies, and arts, nonprofit, and public service organizations.',
11, 699, '2019-10-01', '2021-03-17', 8, 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-5_kohbh4.jpg', 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-6_tyfger.jpg', 4.4, 485, 56645,
'<p>After completing this course, you will have an understanding of the fundamental principles and processes of software
    testing. You will have actively created test cases and run them using an automated testing tool. You will being
    writing and recognizing good test cases, including input data and expected outcomes.</p>
<br />
<p>After completing this course, you will be able to…</p>
<ul>
    <li>
        Describe the difference between verification and validation.
    </li>
    <li>
        Explain the goal of testing.
    </li>
    <li>
        Use appropriate test terminology in communication; specifically: test fixture, logical test case, concrete test case,
        test script, test oracle, and fault.
    </li>
    <li>
        Describe the motivations for white and black box testing.
    </li>
    <li>
        Compare and contrast test-first and test-last development techniques.
    </li>
    <li>
        Measure test adequacy using statement and branch coverage.
    </li>
    <li>
        Reason about the causes and acceptability of and poor coverage
    </li>
    <li>
        Assess the fault-finding effectiveness of a functional test suite using mutation testing.
    </li>
    <li>
        Critique black-box and white-box testing, describing the benefits and use of each within the greater development
        effort.
    </li>
    <li>
        Distinguish among the expected-value (true), heuristic, consistency (as used in A/B regression), and probability test
        oracles and select the one best-suited to the testing objective.
    </li>
    <li>
        Craft unit and integration test cases to detect defects within code and automate these tests using JUnit. To achieve
        this, students will employ test doubles to support their tests, including stubs (for state verification) and mocks (for
        behavioral verification) (https://martinfowler.com/articles/mocksArentStubs.html).
    </li>
</ul>
<br />
<p>This course is primarily aimed at those learners interested in any of the following roles: Software Engineer, Software
    Engineer in Test, Test Automation Engineer, DevOps Engineer, Software Developer, Programmer, Computer Enthusiast. We
    expect that you should have an understanding of the Java programming language (or any similar object-oriented language
    and the ability to pick up Java syntax quickly) and some knowledge of the Software Development Lifecycle.</p>',
DEFAULT),

('The Big Stuff: Evolution and Ecology', 4, 16, 5, 'University of Colorado Boulder', 
'CU-Boulder is a dynamic community of scholars and learners on one of the most spectacular college campuses in the country. As one of 34 U.S. public institutions in the prestigious Association of American Universities (AAU), we have a proud tradition of academic excellence, with five Nobel laureates and more than 50 members of prestigious academic academies.',
11, 0, '2022-01-07', '2022-08-10', 7, 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-3_td9oxh.jpg', 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-4_svur2o.jpg',4.6, 23, 2960,
'<p>In this course, we will explore how evolution works to generate new species, the wide variety of life on earth. We will also touch on the importance of biodiversity for the overall health of our planet, and for our well being as humans. Then we will discuss ecology and the interconnectedness of life and touch on one big ecological issue in today’s society, conservation.</p>',
DEFAULT),

('Understanding Research Methods', 8, 37, 5, 'University of London', 
'The University of London is a federal University which includes 18 world leading Colleges. Our distance learning programmes were founded in 1858 and have enriched the lives of thousands of students, delivering high quality University of London degrees wherever our students are across the globe. Our alumni include 7 Nobel Prize winners. Today, we are a global leader in distance and flexible study, offering degree programmes to over 50,000 students in over 180 countries. To find out more about studying for one of our degrees where you are, visit www.london.ac.uk',
11, 0, '2018-06-13', '2020-12-12', 10, 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146397/Courses/course-7_vh1kvp.jpg', 
'https://res.cloudinary.com/dgm9rrqgx/image/upload/v1661146395/Courses/course-27_cspmxh.jpg',4.6, 6101, 256638,
'<p>This MOOC is about demystifying research and research methods. It will outline the fundamentals of doing research,
    aimed primarily, but not exclusively, at the postgraduate level. It places the student experience at the centre of
    our endeavours by engaging learners in a range of robust and challenging discussions and exercises befitting SOAS,
    University of London''s status as a research-intensive university and its rich research heritage.</p>

<p>The course will appeal to those of you who require an understanding of research approaches and skills, and
    importantly an ability to deploy them in your studies or in your professional lives. In particular, this course will
    aid those of you who have to conduct research as part of your postgraduate studies but do not perhaps have access to
    research methods courses, or for those of you who feel you would like additional support for self-improvement. No
    prior knowledge or experience in research is required to take this course and as such, the course is for everyone.</p>

<p>This MOOC draws on a wealth of existing course material developed to support research training across SOAS,
    University of London and particularly drawing from the Centre for International Studies and Diplomacy (CISD). In
    2015, the course was nominated for the prestigious Guardian University Award for its innovative approach to online
    learning.</p>

<p>Participation in or completion of this online course will not confer academic credit for University of London
    programmes</p>',
DEFAULT);


-- INSTRUCTOR
INSERT INTO Instructor VALUES
('Laurie Santos', 'Professor', 'Psychology', 4.92, 13616, 4031167, 1),
('Sanjay Rayadurgam', 'Director', 'University of Minnesota Software Engineering Center', 4.49, 192, 56645, 1),
('Kevin Wendt', 'Director of Graduate Studies, Software Engineering', 'Department of Computer Science and Engineering',4.49, 192, 121105, 5),
('Melanie Peffer', 'Research Faculty', NULL, 5, 5, 15063, 5),
('Dr J. Simon Rofe', 'Senior Lecturer in Diplomacy and International Studies', 'SOAS, University of London', 4.56, 1940, 394239, 2),
('Dr Yenn Lee', 'Doctoral Training Advisor', 'SOAS, University of London', 4.56, 1940, 256638, 1);


-- INSTRUCTOR_MAPPING
INSERT INTO InstructorMapping VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3),
(5, 4),
(6, 4);


-- SKILL_MAPPING
INSERT INTO SkillMapping VALUES
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(30, 2),
(24, 3),
(36, 4),
(51, 4),
(58, 4),
(59, 4);


-- MODULES
INSERT INTO Modules VALUES
(1, 'Happiness Can Be Learned', 1, DEFAULT),
(1, 'GI Joe Fallacy', 1, DEFAULT),
(1, 'Quickly Review the Course Expectations', 1, DEFAULT),
(1, 'Your Rewirements for this Week', 1, DEFAULT),
(2, 'Your Rewirements for this Week', 1, DEFAULT),
(2, 'Things We Think Will Make Us Happy (But Don''t)', 1, DEFAULT),
(2, 'Why We Have Misconceptions', 1, DEFAULT),
(3, 'Your Rewirements for this Week', 1, DEFAULT),
(3, 'Annoying Features of the Mind', 1, DEFAULT),
(4, 'Your Rewirements for this Week', 1, DEFAULT),
(4, 'Overcome Biases', 1, DEFAULT),
(5, 'Your Rewirements for this Week', 1, DEFAULT),
(5, 'Better Wanting-Part 1', 1, DEFAULT),
(5, 'Better Wanting-Part 2', 1, DEFAULT),
(5, 'Better Wanting-Part 3', 1, DEFAULT),
(6, 'Strategies for Better Habits', 1, DEFAULT),
(7, 'Learn About Your Final Rewirement Challenge', 1, DEFAULT),
(7, 'Rewirement Challenge: Week 1 Starting Point', 1, DEFAULT),
(8, 'Rewirement Challenge: Week 2 Starting Point', 1, DEFAULT),
(9, 'Rewirement Challenge: Week 3 Starting Point', 1, DEFAULT),
(10, 'Rewirement Challenge: Week 4 Starting Point', 1, DEFAULT),
(10, 'Course Review', 1, DEFAULT),
(1, 'Introduction', 2, DEFAULT),
(1, 'What Matters Most', 2, DEFAULT),
(1, 'Reflecting on What Matters Most', 2, DEFAULT),
(1, 'Self-enhancing and Self-transcending Values', 2, DEFAULT),
(2, 'Views on Purpose', 2, DEFAULT),
(2, 'Do you have a purpose in your life?', 2, DEFAULT),
(2, 'Being Purposeful', 2, DEFAULT),
(3, 'Psychological Pathway', 2, DEFAULT),
(3, 'Behavioral Pathway', 2, DEFAULT),
(3, 'Biological Pathway', 2, DEFAULT),
(4, 'How Purpose Works in Real Life', 2, DEFAULT),
(4, 'Discussion-Purpose in Context', 2, DEFAULT),
(4, 'Conclusion', 2, DEFAULT),
(1, 'Introduction', 4, DEFAULT),
(1, 'What is Research and What Makes a Good Research Question', 4, DEFAULT),
(2, 'What is a Literature Review and Why Do We Need to Do One?', 4, DEFAULT),
(3, 'Why Are Planning and Management Skills Important for Research?', 4, DEFAULT),
(4, 'How Do You Know You Have Been a Good Researcher at the End of a Project?', 4, DEFAULT);


-- TOPICS
INSERT INTO Topics VALUES
('Start a New Journey!', 'Video', 1, 1,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424792/Courses/Videos/mixkit-student-girl-writing-in-the-gardens-of-a-college-4836_yck27x.mp4', DEFAULT), 
('Welcome Letter from Professor Santos', 'Reading', 5, 1,
'', DEFAULT), 
('Become Happier by Learning & Applying Psychological Science', 'Video', 4, 1,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424786/Courses/Videos/mixkit-girl-doing-homework-in-a-library-4531_uzyvsi.mp4', DEFAULT), 
('Why This Course Exists', 'Video', 3, 1,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424778/Courses/Videos/mixkit-little-girl-doing-her-homework-4598_vgo5a1.mp4', DEFAULT), 
('Boosting well-being during the COVID-19 pandemic', 'Reading', 10, 1,
'', DEFAULT), 

('What is the G.I. Joe Fallacy?', 'Video', 4, 2,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424772/Courses/Videos/mixkit-teacher-explaining-mathematical-formulas-4613_jnwg3k.mp4', DEFAULT), 

('Course Requirements', 'Reading', 10, 3,
'', DEFAULT), 
('Course Rewirements', 'Reading', 5, 3,
'', DEFAULT), 
('Course Tracking', 'Reading', 10, 3,
'', DEFAULT), 

('Measure Your Happiness and Discover Your Strengths', 'Reading', 10, 4,
'', DEFAULT), 


('Savoring & Gratitude', 'Reading', 10, 5,
'', DEFAULT), 
('Savoring', 'Video', 1, 5,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424766/Courses/Videos/mixkit-girl-working-on-the-floor-of-a-library-4518_gq7wtg.mp4', DEFAULT), 
('Gratitude', 'Video', 1, 5,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424766/Courses/Videos/mixkit-girl-reading-a-book-in-nature-4897_hvlthl.mp4', DEFAULT), 

('Part 1 - Good Job', 'Video', 7, 6,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424761/Courses/Videos/mixkit-young-teacher-teaching-complicated-equations-4623_kp9cmb.mp4', DEFAULT), 
('Part 2 - Money', 'Video', 11, 6,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424761/Courses/Videos/mixkit-woman-researching-on-the-computer-4713_jji1lz.mp4', DEFAULT), 
('Part 3 - Awesome Stuff, True Love, Perfect Body & Good Grades', 'Video', 12, 6,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424758/Courses/Videos/mixkit-teacher-smiling-in-front-of-a-blackboard-4601_wimrln.mp4', DEFAULT), 

('Annoying Features of the Mind', 'Video', 8, 7,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424755/Courses/Videos/mixkit-strict-teacher-scolds-his-student-4791_ejf4qd.mp4', DEFAULT), 


('Kindness & Social Connection', 'Reading', 10, 8,
'', DEFAULT), 
('Kindness', 'Video', 1, 8,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424756/Courses/Videos/mixkit-father-and-son-with-a-didactic-toy-4553_po0pim.mp4', DEFAULT), 
('Social Connection', 'Video', 1, 8,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424736/Courses/Videos/mixkit-students-walking-through-a-college-4560_orfd7v.mp4', DEFAULT), 

('Annoying Feature #1', 'Video', 4, 9,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424728/Courses/Videos/mixkit-students-resting-on-the-grass-at-a-university-4599_xgvzcy.mp4', DEFAULT), 
('Annoying Feature #2', 'Video', 26, 9,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424727/Courses/Videos/mixkit-mother-and-daughter-reading-a-book-before-bed-10388_hyswyv.mp4', DEFAULT), 
('Annoying Feature #3', 'Video', 7, 9,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424725/Courses/Videos/mixkit-students-walking-on-a-university-campus-4503_x06skf.mp4', DEFAULT), 
('Annoying Feature #4', 'Video', 13, 9,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424723/Courses/Videos/mixkit-little-girl-doing-homework-on-a-laptop-4757_njugjw.mp4', DEFAULT), 
('Annoying Features Summary', 'Video', 1, 9,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424715/Courses/Videos/mixkit-man-turning-the-pages-of-a-book-17385-medium_quqjhu.mp4', DEFAULT),


('Exercise & Sleep', 'Reading', 10, 10,
'', DEFAULT), 
('Exercise', 'Video', 1, 10,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424715/Courses/Videos/mixkit-group-of-young-people-talking-about-their-presentation-4788_opnrw7.mp4', DEFAULT), 
('Sleep', 'Video', 1, 10,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424713/Courses/Videos/mixkit-mother-helps-her-daughter-study-4790_skmedm.mp4', DEFAULT), 

('Part 1 - Rethink "Awesome Stuff"', 'Video', 18, 11,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424712/Courses/Videos/mixkit-father-and-son-reading-a-book-together-4542_dwuweu.mp4', DEFAULT), 
('Part 2 - Thwart Hedonic Adaptation', 'Video', 20, 11,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424707/Courses/Videos/mixkit-happy-young-man-writing-with-pen-and-paper-4793_yxlrip.mp4', DEFAULT), 
('Part 3 - Reset Your Reference Points', 'Video', 19, 11,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424705/Courses/Videos/mixkit-boy-walking-happily-down-the-street-with-headphones-4889_ldcs7v.mp4', DEFAULT), 
('Overcome Biases Summary', 'Video', 2, 11,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424703/Courses/Videos/mixkit-algebra-class-blackboard-view-9537-medium_jefso5.mp4', DEFAULT), 


('Meditation & Gratitude Visit', 'Reading', 10, 12,
'', DEFAULT), 
('Meditation', 'Video', 1, 12,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424703/Courses/Videos/mixkit-algebra-class-blackboard-view-9537-medium_jefso5.mp4', DEFAULT), 

('Good Job', 'Video', 21, 13,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424700/Courses/Videos/mixkit-person-flipping-through-a-book-looking-for-a-page-4723_hdfx4n.mp4', DEFAULT), 
('Good Grades', 'Video', 18, 13,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424658/Courses/Videos/mixkit-little-girl-doing-her-math-homework-4789_f9yluv.mp4', DEFAULT), 

('Kindness', 'Video', 10, 14,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424654/Courses/Videos/mixkit-concentrated-boy-studying-at-home-4761_twtwpm.mp4', DEFAULT), 
('Interview with Elizabeth Dunn', 'Video', 1, 14,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424651/Courses/Videos/mixkit-students-studying-on-a-bench-4566_gh3cdb.mp4', DEFAULT), 
('Social Connection', 'Video', 10, 14,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424647/Courses/Videos/mixkit-girl-drawing-with-color-pencils-7468-medium_dgifq9.mp4', DEFAULT), 
('Interview with Nicholas Epley', 'Video', 1, 14,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-planting-seeds-close-up-32169-medium_lbixbt.mp4', DEFAULT), 

('Time Affluence', 'Video', 6, 15,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-book-pages-turning-close-up-17386-medium_lkephc.mp4', DEFAULT), 
('Mind Control', 'Video', 18, 15,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424643/Courses/Videos/mixkit-girl-rotating-an-earth-globe-at-school-16993-medium_m7sv8x.mp4', DEFAULT), 
('Healthy Practices', 'Video', 10, 15,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424643/Courses/Videos/mixkit-smiling-boy-holds-english-education-book-in-bright-room-9004-medium_tssitt.mp4', DEFAULT), 


('Part 1 - Situation Support', 'Video', 8, 16,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424642/Courses/Videos/mixkit-university-student-smiles-and-holds-books-9052-medium_s0agkr.mp4', DEFAULT), 
('Part 2 - Goal Setting', 'Video', 13, 16,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661321166/Courses/Videos/mixkit-students-walking-in-a-university-4519_ng379m.mp4', DEFAULT), 
('Interview with Gabriele Oettingen', 'Video', 32, 16,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424792/Courses/Videos/mixkit-student-girl-writing-in-the-gardens-of-a-college-4836_yck27x.mp4', DEFAULT),


('Welcome to Your Final Rewirement Challenge', 'Video', 1, 17,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424761/Courses/Videos/mixkit-woman-researching-on-the-computer-4713_jji1lz.mp4', DEFAULT), 
('Final Rewirement Challenge', 'Reading', 10, 17,
'', DEFAULT),

('Pro Tip', 'Reading', 2, 18,
'', DEFAULT), 
('Handout', 'Reading', 10, 18,
'', DEFAULT),


('Welcome to Week 2', 'Video', 1, 19,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424755/Courses/Videos/mixkit-strict-teacher-scolds-his-student-4791_ejf4qd.mp4', DEFAULT), 
('Pro Tip', 'Reading', 2, 19,
'', DEFAULT), 
('Handout', 'Reading', 10, 19,
'', DEFAULT),


('Welcome to Week 3', 'Video', 1, 20,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424727/Courses/Videos/mixkit-mother-and-daughter-reading-a-book-before-bed-10388_hyswyv.mp4', DEFAULT), 
('Pro Tip', 'Reading', 2, 20,
'', DEFAULT), 
('Handout', 'Reading', 10, 20,
'', DEFAULT),


('Welcome to Week 4', 'Video', 1, 21,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424715/Courses/Videos/mixkit-man-turning-the-pages-of-a-book-17385-medium_quqjhu.mp4', DEFAULT), 
('Pro Tip', 'Reading', 2, 21,
'', DEFAULT), 
('Handout', 'Reading', 10, 21,
'', DEFAULT),

('Contribute to Research', 'Reading', 10, 22,
'', DEFAULT), 
('Make a pledge', 'Reading', 10, 22,
'', DEFAULT), 
('Optional Post-Course Survey', 'Reading', 10, 22,
'', DEFAULT),
('Conclusion', 'Video', 1, 22,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424705/Courses/Videos/mixkit-boy-walking-happily-down-the-street-with-headphones-4889_ldcs7v.mp4', DEFAULT), 
('Teach Others', 'Reading', 10, 22,
'', DEFAULT); 




INSERT INTO Topics VALUES
('Welcome to Finding Purpose and Meaning in Life', 'Video', 6, 23,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661321166/Courses/Videos/mixkit-students-walking-in-a-university-4519_ng379m.mp4', DEFAULT),
('Who Is This Course For?', 'Video', 8, 23,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424642/Courses/Videos/mixkit-university-student-smiles-and-holds-books-9052-medium_s0agkr.mp4', DEFAULT),
('Access to Purposeful by Kumanu', 'Reading', 2, 23,
'', DEFAULT),
('Course Overview', 'Video', 3, 23,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424643/Courses/Videos/mixkit-smiling-boy-holds-english-education-book-in-bright-room-9004-medium_tssitt.mp4', DEFAULT),
('Course Syllabus', 'Reading', 5, 23,
'', DEFAULT),
('What is your interest in finding purpose in life?', 'Video', 10, 23,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424643/Courses/Videos/mixkit-girl-rotating-an-earth-globe-at-school-16993-medium_m7sv8x.mp4', DEFAULT),
('Help us learn more about you!', 'Reading', 10, 23,
'', DEFAULT),

('Welcome to Week 1', 'Video', 4, 24,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-book-pages-turning-close-up-17386-medium_lkephc.mp4', DEFAULT),
('A Story: Nietzsche''s Walking Stick', 'Video', 2, 24,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-planting-seeds-close-up-32169-medium_lbixbt.mp4', DEFAULT),
('Who Am I?', 'Video', 2, 24,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424647/Courses/Videos/mixkit-girl-drawing-with-color-pencils-7468-medium_dgifq9.mp4', DEFAULT),
('Reflecting on "Who Am I?"', 'Reading', 10, 24,
'', DEFAULT),
('What Do I Value?', 'Video', 3, 24,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424653/Courses/Videos/mixkit-little-girl-studying-on-a-computer-4724_pmhkjv.mp4', DEFAULT),

('Purpose: A central, self-organizing life aim', 'Video', 11, 25,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424654/Courses/Videos/mixkit-concentrated-boy-studying-at-home-4761_twtwpm.mp4', DEFAULT),
('The 2500 year old MRI', 'Video', 1, 25,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424705/Courses/Videos/mixkit-boy-walking-happily-down-the-street-with-headphones-4889_ldcs7v.mp4', DEFAULT),

('More than "Grazing Animals"', 'Video', 12, 26,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424707/Courses/Videos/mixkit-happy-young-man-writing-with-pen-and-paper-4793_yxlrip.mp4', DEFAULT),
('Loving-Kindness Meditation Practice', 'Video', 3, 26,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424712/Courses/Videos/mixkit-father-and-son-reading-a-book-together-4542_dwuweu.mp4', DEFAULT),


('Welcome to Week 2', 'Video', 9, 27,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424723/Courses/Videos/mixkit-little-girl-doing-homework-on-a-laptop-4757_njugjw.mp4', DEFAULT),
('"Thou shalt" Reflection', 'Reading', 10, 27,
'', DEFAULT),
('A Story: 2001 A Space Odyssey', 'Video', 2, 27,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424725/Courses/Videos/mixkit-students-walking-on-a-university-campus-4503_x06skf.mp4', DEFAULT),
('Crafting and Sharing a Purpose Statement', 'Reading', 10, 27,
'', DEFAULT),
('Learning about Purpose from Camus, Sartre and Nietzsche', 'Video', 5, 27,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424727/Courses/Videos/mixkit-mother-and-daughter-reading-a-book-before-bed-10388_hyswyv.mp4', DEFAULT),
('A Story: Albert Camus', 'Video', 2, 27,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424736/Courses/Videos/mixkit-students-walking-through-a-college-4560_orfd7v.mp4', DEFAULT),

('What kind of cook are you?', 'Video', 8, 28,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424758/Courses/Videos/mixkit-teacher-smiling-in-front-of-a-blackboard-4601_wimrln.mp4', DEFAULT),
('The Curious Camel', 'Video', 7, 28,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424761/Courses/Videos/mixkit-woman-researching-on-the-computer-4713_jji1lz.mp4', DEFAULT),
('A Story: Obuntu', 'Video', 3, 28,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424766/Courses/Videos/mixkit-girl-reading-a-book-in-nature-4897_hvlthl.mp4', DEFAULT),

('Purposeful: Be, Do and Action Goals', 'Video', 7, 29,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424772/Courses/Videos/mixkit-teacher-explaining-mathematical-formulas-4613_jnwg3k.mp4', DEFAULT),
('Let''s meet a few purposeful people', 'Video', 17, 29,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424778/Courses/Videos/mixkit-little-girl-doing-her-homework-4598_vgo5a1.mp4', DEFAULT),
('Identifying your Be, Do and Action Goals', 'Video', 6, 29,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424781/Courses/Videos/mixkit-girl-sitting-in-a-garden-typing-on-a-laptop-4865_ty45dm.mp4', DEFAULT),
('Share Your "Be", "Do" and "Action" Goals', 'Reading', 10, 29,
'', DEFAULT),


('Why Pupose Works: Psychological Pathway', 'Video', 13, 30,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424755/Courses/Videos/mixkit-strict-teacher-scolds-his-student-4791_ejf4qd.mp4', DEFAULT),
('What is post-traumatic growth? What role does it play in living a purposeful life?', 'Video', 9, 30,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424758/Courses/Videos/mixkit-teacher-smiling-in-front-of-a-blackboard-4601_wimrln.mp4', DEFAULT),

('Why Purpose Works: Behavioral Pathway', 'Video', 8, 31,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424792/Courses/Videos/mixkit-student-girl-writing-in-the-gardens-of-a-college-4836_yck27x.mp4', DEFAULT),
('The Cookie Study', 'Video', 7, 31,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424736/Courses/Videos/mixkit-students-walking-through-a-college-4560_orfd7v.mp4', DEFAULT),
('Looking Ahead', 'Video', 7, 31,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424723/Courses/Videos/mixkit-little-girl-doing-homework-on-a-laptop-4757_njugjw.mp4', DEFAULT),

('Why Purpose Works: Biological Pathway', 'Video', 8, 32,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424715/Courses/Videos/mixkit-man-turning-the-pages-of-a-book-17385-medium_quqjhu.mp4', DEFAULT),

('How Purpose Works: College & Military', 'Video', 10, 33,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424713/Courses/Videos/mixkit-mother-helps-her-daughter-study-4790_skmedm.mp4', DEFAULT),
('Living with Purpose as a Student with Jim Loehr', 'Video', 13, 33,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424703/Courses/Videos/mixkit-algebra-class-blackboard-view-9537-medium_jefso5.mp4', DEFAULT),
('How Purpose Works: Work & Retirement', 'Video', 10, 33,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424705/Courses/Videos/mixkit-boy-walking-happily-down-the-street-with-headphones-4889_ldcs7v.mp4', DEFAULT),
('How Purpose Works: Aging & Retirement', 'Video', 7, 33,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424700/Courses/Videos/mixkit-person-flipping-through-a-book-looking-for-a-page-4723_hdfx4n.mp4', DEFAULT),
('How Purpose Works: Family & Community', 'Video', 9, 33,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424647/Courses/Videos/mixkit-girl-drawing-with-color-pencils-7468-medium_dgifq9.mp4', DEFAULT),

('Directions for Discussion Prompts', 'Reading', 1, 34,
'', DEFAULT),
('Purpose in a School Context', 'Reading', 10, 34,
'', DEFAULT),
('Purpose in a Military Context', 'Reading', 10, 34,
'', DEFAULT),
('Purpose in a Work Context', 'Reading', 10, 34,
'', DEFAULT),
('Purpose in a Retirement Context', 'Reading', 10, 34,
'', DEFAULT),
('Purpose in a Family and Community Context', 'Reading', 10, 34,
'', DEFAULT),

('Vic''s Story', 'Video', 2, 35,
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-book-pages-turning-close-up-17386-medium_lkephc.mp4', DEFAULT);




INSERT INTO Topics VALUES
('Read Me First', 'Reading', 10, 36, 
'<div>
    <div class="rc-CDSToCMLStylesheet css-z542kk">
        <div id="" class="rc-RenderableHtml rc-CML show-soft-breaks css-z95mbv" dir="auto">
            <div>
                <div data-track="true" data-track-app="open_course_home" data-track-page="item_layout"
                    data-track-action="click" data-track-component="cml" role="presentation">
                    <div data-track="true" data-track-app="open_course_home" data-track-page="item_layout"
                        data-track-action="click" data-track-component="cml_link">
                        <div>
                            <div class="cmlToHtml-content-container" style="white-space: pre-wrap">
                                <p>The format of this Guardian Award-nominated MOOC is a little different from other
                                    online courses you may have encountered so far. Central to the course are peer
                                    interactions, through which you will communicate, reflect upon, and improve your
                                    work together with your fellow learners, emulating the real-world research
                                    experience. Our approach represents a constructivist mode of learning, underpinned
                                    by the belief that every single student on the course has the capacity to positively
                                    enhance the programme. Given the vastly global and diverse composition of the
                                    student body, you will have the opportunity to interact with peers from different
                                    cultural and professional backgrounds around the world and learn from them and help
                                    them learn.</p>
                                <p>You will see videos nonetheless. The videos we have produced are a series of
                                    interviews with those undertaking academic research at various points in their
                                    careers. Those videos are there as another learning resource to support the
                                    discussions you will have with your colleagues. </p>
                                <p>The course consists of 4 e-tivities and it is anticipated to require 4 to 6 weeks to
                                    complete all four components. </p>
                                <p></p>
                                <ul>
                                    <li>
                                        <p><strong>What is an ''e-tivity''?</strong></p>
                                    </li>
                                </ul>
                                <p>E-tivity is a term coined by Professor Gilly Salmon (2002) to describe a framework
                                    for facilitating active learning in an online environment. Each e-tivity follows a
                                    format that clearly states to the students its <strong>Purpose</strong>, the
                                    <strong>Task</strong> at hand, the contribution or <strong>Response</strong> type,
                                    and the <strong>Outcome</strong>. </p>
                                <p>Below is a diagrammatic overview of the course. <strong>In order to receive a
                                        Verified Certificate, participants will need to complete at least the first
                                        three e-tivities (all equally weighted)</strong>. </p>
                                <ul>
                                    <li>
                                        <p><strong>What does it mean to provide feedback?</strong></p>
                                    </li>
                                </ul>
                                <p>In each e-tivity, you will be asked to provide evaluations (i.e.
                                    <strong>Response</strong>) on the work of your peers. This is as important as your
                                    own <strong>Task</strong> submission. We will be using a Peer Review tool for this
                                    process, which will distribute at random submissions amongst the student body. In
                                    providing your evaluations on the validity of your peers'' submissions, remember to
                                    be fair and balanced; you will be able to contribute to collective success.</p>
                                <p></p>
                                <ul>
                                    <li>
                                        <p><strong>What should I look for when evaluating a fellow student''s
                                                submission?</strong></p>
                                    </li>
                                </ul>
                                <p>Given the nature of the subject and tasks of this course, we steer away from a
                                    pre-defined evaluation checklist. Instead, we use purposely-broad criteria here.
                                    Peer evaluation in this course consists of two parts:</p>
                                <p>First, it involves verifying whether the work at hand is a genuine attempt at the
                                    task (to be marked as ''1'') or gobbledygook (such as an incomplete text, irrelevant
                                    filler or spam; to be marked as ''0'').</p>
                                <p>Second, and more importantly, you are asked to provide a short comment. When you are
                                    making your comment, you should take into account whether and to what extent the
                                    work you are assigned to evaluate ''makes sense'' to you. You may well be out of your
                                    field, but you are in a position to apply a qualitative judgement about the cogency
                                    of their project. </p>
                                <p></p>
                                <ul>
                                    <li>
                                        <p><strong>What if my work is criticised?</strong></p>
                                    </li>
                                </ul>
                                <p>Dealing with feedback can be a challenge for anyone – from those at the earliest
                                    stages of their academic journeys to esteemed professors. Sometimes it can be hard
                                    to hear that the work you have dedicated yourself to has not been received well. Do
                                    not take it to heart. That can be difficult, we know, but feedback can make a
                                    valuable contribution to enhancing your work by encouraging you to reflect on your
                                    previous line of thinking. Please also watch the ''How to Work with Criticism'' video
                                    below for some further thoughts on feedback. </p>
                                <p>One thing you can do, and we absolutely encourage you to do, is to make the most of
                                    the <strong>Discussion Forums</strong>. The forums are there for you to have a
                                    free-style discussion about each e-tivity task with your colleagues <em>before</em>
                                    you submit it. Testing the water before diving in, if you like, so you can have a go
                                    without consequence. You can ''try'' as many times as you wish in the forums before
                                    you choose one to submit. It also constitutes a rich pool of examples, where you can
                                    benefit from reading how others go about their research. </p>
                                <p></p>
                                <p>Now you are ready for E-tivity 1!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>', DEFAULT),
('How to Work with Criticism', 'Video', 3, 36, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-book-pages-turning-close-up-17386-medium_lkephc.mp4', DEFAULT),

('E-tivity 1 - Instructors'' Commentary', 'Video', 3, 37, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424647/Courses/Videos/mixkit-girl-drawing-with-color-pencils-7468-medium_dgifq9.mp4', DEFAULT),
('Rob Denny says...', 'Video', 1, 37, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661321166/Courses/Videos/mixkit-students-walking-in-a-university-4519_ng379m.mp4', DEFAULT),
('Sandra Halperin says...', 'Video', 3, 37, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424642/Courses/Videos/mixkit-university-student-smiles-and-holds-books-9052-medium_s0agkr.mp4', DEFAULT),
('Michael Hutt says...', 'Video', 2, 37, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424643/Courses/Videos/mixkit-smiling-boy-holds-english-education-book-in-bright-room-9004-medium_tssitt.mp4', DEFAULT),
('Myrhh Domingo says...', 'Video', 1, 37, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424645/Courses/Videos/mixkit-planting-seeds-close-up-32169-medium_lbixbt.mp4', DEFAULT),

('E-tivity 2 - Instructors'' Commentary', 'Video', 5, 38, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424653/Courses/Videos/mixkit-little-girl-studying-on-a-computer-4724_pmhkjv.mp4', DEFAULT),
('Sandra Halperin says...', 'Video', 2, 38, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424700/Courses/Videos/mixkit-person-flipping-through-a-book-looking-for-a-page-4723_hdfx4n.mp4', DEFAULT),
('Reza Gholami says...', 'Video', 1, 38, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424705/Courses/Videos/mixkit-boy-walking-happily-down-the-street-with-headphones-4889_ldcs7v.mp4', DEFAULT),
('Charlotte Horylyck says...', 'Video', 3, 38, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424707/Courses/Videos/mixkit-happy-young-man-writing-with-pen-and-paper-4793_yxlrip.mp4', DEFAULT),

('E-tivity 3 - Instructors'' Commentary', 'Video', 3, 39, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424725/Courses/Videos/mixkit-students-walking-on-a-university-campus-4503_x06skf.mp4', DEFAULT),
('Reza Gholami says...', 'Video', 1, 39, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424715/Courses/Videos/mixkit-man-turning-the-pages-of-a-book-17385-medium_quqjhu.mp4', DEFAULT),
('Sandra Halperin says...', 'Video', 3, 39, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424727/Courses/Videos/mixkit-mother-and-daughter-reading-a-book-before-bed-10388_hyswyv.mp4', DEFAULT),
('Gina Heathcote says...', 'Video', 1, 39, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424755/Courses/Videos/mixkit-strict-teacher-scolds-his-student-4791_ejf4qd.mp4', DEFAULT),
('Michael Hutt says...', 'Video', 2, 39, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424761/Courses/Videos/mixkit-young-teacher-teaching-complicated-equations-4623_kp9cmb.mp4', DEFAULT),

('E-tivity 4 - Instructors'' Commentary', 'Video', 3, 40, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424772/Courses/Videos/mixkit-teacher-explaining-mathematical-formulas-4613_jnwg3k.mp4', DEFAULT),
('Gina Heathcote says...', 'Video', 1, 40, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424792/Courses/Videos/mixkit-student-girl-writing-in-the-gardens-of-a-college-4836_yck27x.mp4', DEFAULT),
('Rob Denny says...', 'Video', 1, 40, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424778/Courses/Videos/mixkit-little-girl-doing-her-homework-4598_vgo5a1.mp4', DEFAULT),
('Reza Gholami says...', 'Video', 1, 40, 
'https://res.cloudinary.com/dgm9rrqgx/video/upload/v1661424766/Courses/Videos/mixkit-girl-reading-a-book-in-nature-4897_hvlthl.mp4', DEFAULT);




-- USER_COURSES
--INSERT INTO UserCourses VALUES
--(1, 1, 2022-06-13, DEFAULT),
--(1, 3,2022-03-03, 'Completed'),
--(2, 2, DEFAULT, DEFAULT),
--(1, 4,2020-12-30, 'Completed');























