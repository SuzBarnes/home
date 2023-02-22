import React from "react";
import "../styling/blogcard.scss";

const BlogCard2 = () => {
    return (
        <div className="blogcard">
            <div className="date"> 22/02/23</div>
            <h2>How to... Break into Coding</h2>
            <p>
                I have had countless enquiries since my last post. Some have similar
                questions, so I thought I would write the answers here for those that
                are lurking!
            </p>
            <h3 className="center">
                What are the different routes into Software Engineering?
            </h3>
            <p>
                Firstly, make sure it is the right fit for you! You don't want to be
                another 5 years into this job realising it isn't right! You have a
                second chance at a career, make sure the glass slipper fits.
            </p>
            <p>
                I checked it was a good fit for me by doing some Javascript on{" "}
                <a href="https://freecodecamp.org">FreeCodeCamp</a> and followed this up
                by completing Command Shift's{" "}
                <a href="https://www.commandshift.co/courses/intro/">INTRO course</a>.
                I really enjoyed it. That is the first recommendation for you to do
                before even bothering to read the rest of this!
            </p>
            <p>Right, routes into Software Engineering:</p>
            <h4>1. Self Taught:</h4>
            <p>
                You can teach yourself, it is completely free. It may take a while, you
                might pick up some bad habits but hey, if you have the time and the
                self-discipline, then why not give it a go?
            </p>
            <h4>2. Bootcamps: </h4>
            <p>a) Full Time: </p>
            <p>
                This typically involves a 12-15 week intensive 08.30-17.00 course
                through providers like NorthCoders. It tends to be around £10,000 and I
                believe there is now some{" "}
                <a href="https://northcoders.com/our-courses/remote-coding-bootcamp#finance">
                    government funding
                </a>{" "}
                which may help make this a viable option for some.
            </p>
            <p>b) Part Time:</p>
            <p>
                Command Shift is the only bootcamp I've found to provide this. This was
                the route I took as I wanted to see my daughter more and keep one foot
                in dentistry, just in case I was making a terrible mistake (I wasn't).
            </p>
            <p>
                It just gave me the reassurance I needed that even if I hated the
                course, I could still "fall-back" on dentistry. The current cost is
                £6,000 which can be paid in instalments with{" "}
                <a href="https://www.commandshift.co/post/making-it-easier-for-you-to-finance-your-studies/">
                    0% finance
                </a>
                .{" "}
            </p>
            <h4>3. University:</h4>
            <p>
                There are multiple different routes in this one. you could study
                undergraduate Computer Science, or go into doing a Masters conversion
                course. I haven't fully researched it, because I knew it wouldn't have
                worked for me.
            </p>
            <p>Truth be told, all the options are viable.</p>
            <p>
                I chose the part-time bootcamp because it is what worked best for me. If
                I had a relevant degree, there would probably have been more doors open
                to me, job requirements often asked for a degree in Computer Science.
            </p>
            <p>
                However, I still managed to get offers without a CompSci degree in about a
                month of graduating my bootcamp.
            </p>
            <h3 className="center">What should I expect in terms of salary?</h3>
            <p>
                The salaries I saw were typically advertised from 22-35k, the offers I
                received ranged from 25-32k.
            </p>
            <p>
                For a first job with no experience in software engineering, I feel that
                they are pretty decent starting salaries.
            </p>
            <h3 className="center">Was it difficult to get a job?</h3>
            <p>Yes and no.</p>
            <p>
                As I have mentioned, there are a lot of jobs requesting a degree within
                CompSci or other STEM subjects (Physics has a lot of coding within it),
                I applied to them anyway and had radio silence, which was expected.
            </p>
            <p>
                I made a giant Trello board (basically a big post-it list) with job
                applications, and there were a lot of rejections/silence.
            </p>
            <p>
                On the flip side, once I managed to get past the initial application and
                tech-tests - and in front of a real person - I managed to get traction.
            </p>
            <p>
                I wanted to go down the consultancy route myself as I felt it was best
                suited to me, and the biggest draw was that they would have well thought
                through training to go alongside it.
            </p>
            <p>That's about it!</p>
            <p>
                I hope this helps those that are interested. As always, send me a
                message/email if you need to and I'll reply as soon as I can.
            </p>
            <p>
                Bottom line is, make sure whatever career you end up doing, is the right
                fit for <i>you</i>.
            </p>
            <p className="center">I wish you all the best.</p>
        </div>
    );
};

export default BlogCard2;
