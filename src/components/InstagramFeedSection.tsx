import React, { useState } from 'react';
import { INSTAGRAM_POSTS, ANNOUNCEMENTS } from '../data/content';
import { InstagramPost, Announcement, Language } from '../types';
import { Heart, MessageCircle, Share2, Instagram, Bell, ChevronRight, X, Send, Sparkles } from 'lucide-react';

interface InstagramFeedSectionProps {
  lang: Language;
}

export const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({ lang }) => {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_POSTS);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [newComment, setNewComment] = useState('');
  const [announcementFilter, setAnnouncementFilter] = useState<string>('all');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleToggleLike = (postId: string) => {
    const isLiked = !!likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            likes: isLiked ? p.likes - 1 : p.likes + 1,
          };
        }
        return p;
      })
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedPost) return;

    const updatedComments = [
      ...selectedPost.commentsList,
      { user: 'anda_mahasiswa_pjj', text: newComment.trim(), time: 'Baru saja' },
    ];

    setSelectedPost({
      ...selectedPost,
      commentsList: updatedComments,
      commentsCount: selectedPost.commentsCount + 1,
    });

    setPosts((prev) =>
      prev.map((p) =>
        p.id === selectedPost.id
          ? { ...p, commentsList: updatedComments, commentsCount: p.commentsCount + 1 }
          : p
      )
    );
    setNewComment('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const filteredAnnouncements = announcementFilter === 'all'
    ? ANNOUNCEMENTS
    : ANNOUNCEMENTS.filter((a) => a.category === announcementFilter);

  return (
    <section id="pengumuman" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>@manajemen11_sibermu</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{lang === 'id' ? 'Kabar & Feed Terkini' : 'Feed & Announcements'}</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {lang === 'id'
                ? 'Informasi Terkini & Rekaman Aktivitas Mahasiswa'
                : 'Latest Updates & Student Community Feeds'}
            </h2>
            <p className="text-sm text-slate-300">
              {lang === 'id'
                ? 'Terhubung langsung dengan media sosial resmi kelas Manajemen 11. Simak dokumentasi kuliah daring, agenda webinar, dan tips belajar di perantauan.'
                : 'Follow our official Instagram hub for live announcements, study advice, and diaspora milestone spotlights.'}
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:opacity-95 transition-opacity self-start md:self-auto shrink-0 shadow"
          >
            <Instagram className="w-4 h-4" />
            <span>{lang === 'id' ? 'Ikuti di Instagram' : 'Follow on Instagram'}</span>
          </a>
        </div>

        {/* Instagram Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              {/* Instagram Card Header */}
              <div className="p-4 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-400">
                      M11
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-white">manajemen11_sibermu</span>
                      <span className="text-[10px] text-blue-400">✓</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Sibermu PJJ Luar Negeri</span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500">{post.date}</span>
              </div>

              {/* Post Image Container */}
              <div
                onClick={() => setSelectedPost(post)}
                className="relative aspect-square w-full overflow-hidden cursor-pointer group bg-slate-950"
              >
                <img
                  src={post.imageUrl}
                  alt="Post Instagram Manajemen 11"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-semibold text-sm">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    {post.commentsCount}
                  </span>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleLike(post.id)}
                      className="p-1 hover:text-rose-500 transition-colors"
                      aria-label="Like post"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts[post.id] ? 'fill-rose-500 text-rose-500' : 'text-slate-300'
                        }`}
                      />
                    </button>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="p-1 hover:text-amber-400 transition-colors"
                      aria-label="Comment on post"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-1 hover:text-white transition-colors"
                      aria-label="Share post"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-[11px] text-amber-400/90 font-mono">
                    {post.tag}
                  </span>
                </div>

                <div className="text-xs font-semibold text-white">
                  {post.likes} {lang === 'id' ? 'suka' : 'likes'}
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  <span className="font-semibold text-white mr-1.5">manajemen11_sibermu</span>
                  {lang === 'id' ? post.caption : post.captionEn}
                </p>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors block text-left"
                >
                  {lang === 'id'
                    ? `Lihat semua ${post.commentsCount} komentar...`
                    : `View all ${post.commentsCount} comments...`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official Announcements Board */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-400" />
              <h3 className="font-serif-title text-xl font-bold text-white">
                {lang === 'id' ? 'Papan Pengumuman Resmi PJJ' : 'Official PJJ Bulletins'}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
              {['all', 'Akademik', 'Beasiswa', 'Komunitas'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAnnouncementFilter(cat)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    announcementFilter === cat
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat === 'all' ? (lang === 'id' ? 'Semua Berita' : 'All') : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-800">
            {filteredAnnouncements.map((anc) => (
              <div key={anc.id} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-mono text-amber-400">{anc.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300 font-medium">{anc.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{anc.readTime}</span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition-colors">
                  {lang === 'id' ? anc.title : anc.titleEn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'id' ? anc.summary : anc.summaryEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Post Detail & Comments Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-400">
                      M11
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-white">manajemen11_sibermu</span>
                      <span className="text-[10px] text-blue-400">✓</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{selectedPost.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                    {lang === 'id' ? selectedPost.caption : selectedPost.captionEn}
                  </p>
                </div>

                {/* Comment Section */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {lang === 'id' ? 'Komentar Mahasiswa' : 'Student Comments'} ({selectedPost.commentsList.length})
                  </h5>

                  <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                    {selectedPost.commentsList.map((comm, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs">
                        <div className="flex items-center justify-between text-slate-400 mb-1">
                          <span className="font-semibold text-amber-400">@{comm.user}</span>
                          <span className="text-[10px]">{comm.time}</span>
                        </div>
                        <p className="text-slate-200">{comm.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add comment form */}
                  <form onSubmit={handleAddComment} className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder={lang === 'id' ? 'Tulis tanggapan atau sapaan...' : 'Add a comment or cheer...'}
                      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      disabled={!newComment.trim()}
                      className="p-2 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 disabled:opacity-50 transition-opacity"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{selectedPost.likes} orang menyukai</span>
                {copySuccess && <span className="text-emerald-400">Tautan tersalin!</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
