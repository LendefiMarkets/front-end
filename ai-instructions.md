# AI Instructions for Lendefi Markets Frontend

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React functional component patterns
- Prefer hooks over class components
- Use absolute imports where possible
- Maintain consistent naming conventions

### File Organization
- Components in `src/components/`
- Pages in `src/` (App.tsx, UserHome.tsx)
- Utilities in `src/utils/`
- Types in `src/types/`
- Assets in `public/assets/`

### Web3 Integration
- Always use Reown AppKit for wallet connections
- Use ethers.js v6 for contract interactions
- Handle network switching gracefully
- Provide loading states for blockchain operations
- Include error handling for transaction failures

### Styling Guidelines
- Maintain dark theme consistency
- Use CSS modules or styled-components
- Ensure mobile responsiveness
- Follow accessibility best practices
- Optimize for performance

### Content Management
- Blog posts use markdown with YAML frontmatter
- Images should be optimized for web
- Maintain SEO metadata for all content
- Use semantic HTML structure
- Include alt text for images

### Testing Strategy
- Write unit tests for utility functions
- Integration tests for Web3 components
- E2E tests for critical user flows
- Test wallet connection scenarios
- Validate responsive design

### Security Considerations
- Never expose private keys
- Validate all user inputs
- Sanitize markdown content
- Use HTTPS for all external requests
- Implement proper error boundaries

### Performance Optimization
- Lazy load components where appropriate
- Optimize images and assets
- Minimize bundle size
- Use React.memo for expensive components
- Implement proper loading states

### Deployment
- Build generates static files in `dist/`
- Environment variables must be prefixed with `VITE_`
- Supports deployment to Vercel, Netlify, etc.
- Requires Node.js environment for build process