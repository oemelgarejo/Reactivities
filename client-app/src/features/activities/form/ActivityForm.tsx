import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} nama='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} nama='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} nama='category' onChange={handleInputChange} />
                <Form.Input placeholder='Date' value={activity.date} nama='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} nama='city' onChange={handleInputChange} />
                <Form.Input placeholder='Veneu' value={activity.venue} nama='venue' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}