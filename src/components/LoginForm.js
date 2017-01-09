import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        const { email, password } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input label="Email" 
                    placeholder="test@gmail.com" 
                    onChangeText={this.onEmailChange.bind(this)}
                    value={email} />
                </CardSection>

                <CardSection>
                    <Input label="Password" 
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password} />
                </CardSection>

                <Text style={style.errorTextStyle} >
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const style = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

mapStateToProps = ({auth}) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser  
    }
)(LoginForm);