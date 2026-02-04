import { useForm } from '@inertiajs/react';
import { login } from '@/routes/admin';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to Laravel login route
    post(login.url()); // Laravel route URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="you@example.com"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="••••••••"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-secondary"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors"
          >
            {processing ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="register" className="text-sm text-gray-600 hover:text-gray-800">
            Singn Up
          </a>
        </div>
      </div>
    </div>
  );
}
