import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import styles from '../styles/Home.module.css'

function Gallery () {
    const [artWorks, setArtWorks] = useState([]);
    
    useEffect(() => {

        //setter opp Cosmic JS
        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        

        bucket.getObjects({
            slug: 'art-works',
            query: {
                type: 'art-works'
              },
            props: 'slug,title,metafields',
            limit: 20
        })
        .then(data => {
            console.log(data.objects)
            setArtWorks(data.objects);
        })
        .catch(error => {
            console.log(error)
        })
    }, []);


    function renderSkeleton() {
        return (
            <p>Laster data..</p>
        );
    }


    function renderPage() {
        return (
            <main className={styles.main}>
                <h1>Galleri</h1>
                {/* <h3>Akvarell</h3> */}
                <ul>
                    {artWorks.map(artWork => {
                        const image = artWork.metafields.find(metafield => metafield.key === 'main_image')
                        const height = artWork.metafields.find(metafield => metafield.key === 'height')
                        const width = artWork.metafields.find(metafield => metafield.key === 'width')
                        
                    
                        return (
                            <li key={artWork.slug}>
                                {artWork.title}
                                <img src={image.imgix_url} width="200"/>
                                <p>{height.value} x {width.value}</p>
                            </li>
                        )
                    })}
                </ul>


                {/* <ul>
                    {artWorks.map(item => {
                        const image = item.metafields.find(metafield => metafield.key === 'main_image')
                        return(
                            <li key={item.slug}>
                                {item.title}
                                <img src={image.imgix_url} width="200"/>
                                
                            </li>
                        )
                    })}
                </ul> */}
            </main>
        )
    }

    return(
        <>
            {(artWorks.length === 0) ? renderSkeleton() : renderPage()}
        </>
    );


}

export default Gallery;