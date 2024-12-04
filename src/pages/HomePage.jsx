function HomePage({ token }) {
  return (
    <div>
      <p className="text-center py-4">Welcome back, {token.user.user_metadata.full_name}</p>
    </div>
  );
}

export default HomePage;
