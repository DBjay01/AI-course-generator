"use client";

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser  } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect } from 'react';

function CourseLayout({ params }) {
    const { user } = useUser ();

    // Unwrap params using React.use()
    const unwrappedParams = React.use(params);

    useEffect(() => {
        if (unwrappedParams) {
            GetCourse();
        }
    }, [unwrappedParams, user]);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(
                eq(CourseList.courseId, unwrappedParams?.courseId),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
            ));

        console.log(result);
    };

    return (
        <div>courseLayout</div>
    );
}

export default CourseLayout;





// "use client"

// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { useUser } from '@clerk/nextjs'
// import { and, eq } from 'drizzle-orm'
// import React, { useEffect } from 'react'

// function CourseLayout({params}) {
//     const{user}=useUser();
//     useEffect(()=>{
//         params&&GetCourse();
//     },[params, user])

//     const GetCourse=async ()=>{
//         const result=await db.select().from(CourseList)
//         .where(and(eq(CourseList.courseId,params?.courseId),
//         eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
    
//         console.log(result);
//     }

//   return (
//     <div>courseLayout</div>
//   )
// }

// export default CourseLayout