import React from 'react';
import ItemBox from '../components/ItemBox';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import PageMiddleText from '../components/PageMiddleText';
import useItems from '../Hooks/useItemsHook';
import learningImage from '../images/onlineLearning.gif';
function Courses() {
  const [courses, setCourses] = useItems();
  return (
    <Layout>
      <div>
        <PageBanner image={learningImage} subtitle={'Learning Quotes'} wave>
          The sole purpose of eLearning is to teach.” — Christopher Palm. “The
          most profound words will remain unread unless you can keep the learner
          engaged. You can't see their eyes to know if they got it so … say it,
          show it, write it, demo it and link it to an activity.”
        </PageBanner>
        <PageMiddleText
          firstLine={'Priceless...'}
          secondLine="Learning"
          bgColor="bg-amber-500"
        />
        <div className="container mx-auto my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 px-10">
          {courses.length === 0
            ? 'Loading...'
            : courses.map((course) => (
                <ItemBox key={course.id} item={course} set="set4" />
              ))}
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
