import React from 'react';
import './InstagramReelsGrid.css';

const InstagramReels = () => {
    const luxuryPosts = [
        {
            id: 1,
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/521318285_17843972340536154_8218496205316094647_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzY3ODk3Nzk3NTQyNjM1Mjg5Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkciJ9&_nc_ohc=81Lh-VA8tXQQ7kNvwGpNdDz&_nc_oc=AdnOYT_nR--tiuvihmf40WkMJwom3PBECEyUG7ENnT9stvixc_147VSGLTLJ6Qx5p00CdW1kZiP4d4OiljWiTpp-&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UZZtBPJS78KviqYjZrtMKg&oh=00_AfScIInzwSVObZOZ8HnJarY6IbAA7XIoTOr6VcgWaDge6g&oe=68845267',
            instagramUrl: 'https://www.instagram.com/reel/DMOWvoBxgb8/?utm_source=ig_web_copy_link&igsh=cGhzamZyc2w2aWpv',
            title: 'top 7 places in thailand'
        },
        {
            id: 2,
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/522228456_17844635829536154_2987392949968574396_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzY4MTU4NTAyODI2Njc0NzU1Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkciJ9&_nc_ohc=ZeHr07bNLpYQ7kNvwE-uAoA&_nc_oc=AdmiiOsf1hTItBZLlhju7qYbkUKrG_4-9jul9PjOrdt1_7GmuODWanRZyv0qhhLifHEkfC6lYfkUDymeLw0VNNPv&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UZZtBPJS78KviqYjZrtMKg&oh=00_AfSXfSSuVEj386x2LP2iXG3RfopzHY3TY6On5D_8HrdcCg&oe=68844E6F',
            instagramUrl: 'https://www.instagram.com/reel/DMXnhPMPGah/?utm_source=ig_web_copy_link',
            title: 'greece'
        },
        {
            id: 3,
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/521605017_17844481785536154_8550125261482198832_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY4MDk0NTQ5MjkyMjQyNzQwMw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkciJ9&_nc_ohc=c9QBeYPuncIQ7kNvwEGnrDp&_nc_oc=AdngmPCwlDv_TIhiyVPjTSISneVv7-VVMT3ameJN3ZrUbv-YojAIvjWdwnBCidgcO1paN5laAeCpad41m6fKD8Gf&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UZZtBPJS78KviqYjZrtMKg&oh=00_AfTAA5Z6wgnKOAqFxeujsSib2t10cXmsngzRhOF_CPvOKA&oe=68845181',
            instagramUrl: 'https://www.instagram.com/reel/DMVWGxfN2gL/?utm_source=ig_web_copy_link&igsh=ZWRhOGZzejlrMjFy',
            title: '12 jyotirlingas'
        },
        {
            id: 4,
            image: 'https://scontent.cdninstagram.com/v/t51.82787-15/521373794_17844664983536154_5550339114122322380_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY4MTY3Mjc0NDE1NjcwNzQ5MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkciJ9&_nc_ohc=nWksHiaEsukQ7kNvwHKNmDk&_nc_oc=Adl__KInoHNwJjT-zxYd4fQVqSEbPKbtpkx-0WYmEgV11j4RgvJYESI8rFv1W4Zy8CkNJcbHUXv1zVRuGScmmyPy&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=trEjmasuruM_Ahio6OMPzg&oh=00_AfSCJdREKIS2pb--0z76n-Aa979Fm_LpPkQ7GixOCkniHg&oe=68868395',
            instagramUrl: 'https://www.instagram.com/reel/DMX7dq-srqj/?utm_source=ig_web_copy_link&igsh=MWlsZHQ4d21pa2RwaA==',
            title: 'dubai marina'
        }
    ];

    const handleInstagramClick = (instagramUrl) => {
        if (instagramUrl) {
            window.open(instagramUrl, '_blank');
        }
    };

    return (
        <div className="luxury-container">
            <div className="header-section">
                <h2 className='!font-semibold !text-3xl flex justify-center items-center gap-1'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png?20200512141346' height={25} width={30}></img> discover something amazing from Our instagram travel adventures!</h2>
                <p className="subtitle">check out our latest travel adventures and destination highlights</p>
            </div>

            <div className="posts-grid">
                {luxuryPosts.map((post) => (
                    <div
                        className="post-card"
                        key={post.id}
                        onClick={() => handleInstagramClick(post.instagramUrl)}
                    >
                        <div className="post-image">
                            <img src={post.image} alt={post.title} />
                            <div className="hover-overlay">
                                <div className="instagram-overlay">
                                    <div className="instagram-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <span className="view-post-text">VIEW POST</span>
                                </div>
                            </div>
                        </div>
                        <div className="post-title">
                            <h3>{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramReels;
