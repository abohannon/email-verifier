import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  const headers = {
    'Content-Type': 'application/json',
  };

  const payload = JSON.stringify({
    email: 'test@example.com'
  })

  const response = http.post(
    'http://localhost:8081/request-registration',
    payload,
    { headers },
  );

  check(response, {
    'status is 204': (r) => r.status === 204,
  })
}
