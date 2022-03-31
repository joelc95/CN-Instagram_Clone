import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { PhotoContainer } from '../../components/photoContainer';
import { Toolbar } from '../../components/toolbar/Toolbar'
import './index.css'

export const Home = ({ user, setUser }) => {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async() => {
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const data = await response.json();
            setPhotos(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchPhotos();
    }, [])

    return (
        <>
            { !user && <Navigate to='/'/>}
            <Toolbar username={user}/>
            <div className="feed">
                <div className="post-container">
                    {photos.map( (item, index) => (
                        <PhotoContainer photo={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
