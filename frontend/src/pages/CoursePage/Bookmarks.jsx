import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../../components/CoursePage/Layout';
import bookmarksPage from '../../assets/BookmarksPage.png/';

function Bookmarks() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-col  max-w-[450px] mx-auto text-center items-center h-screen justify-center">
        <h1 className="text-white text-4xl font-bold mb-5">You haven&#39;t saved anything yet</h1>
        <p className="text-[#9E9FA2] mb-8">Explore FlexNative courses and start bookmarking your favorite design learning resources.</p>
        <img className="w-[350px]" src={bookmarksPage} alt="not saved yet" />
      </div>
    </Layout>
  );
}

export default Bookmarks;
