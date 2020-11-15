import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empite State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2018/03/shutterstock_273724124.jpg?quality=80&strip=all',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empite State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2018/03/shutterstock_273724124.jpg?quality=80&strip=all',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    },
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could Not find place!</h2>
            </div>
        );
    }

    return (
        <form>
            <Input
                id="title"
                element="input"
                type="text"
                lable="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => { }}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                lable="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={() => { }}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                Update Place
            </Button>
        </form>
    );
};

export default UpdatePlace;