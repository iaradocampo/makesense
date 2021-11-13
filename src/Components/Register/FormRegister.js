import { Form, Button } from 'react-bootstrap';

const FormRegister = () => {
    return<>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <div className="position-btn">
                <Button className="btn-ingreso" type="submit">
                    Registro
                </Button>
            </div>
        </Form>
    </>
}

export default FormRegister;