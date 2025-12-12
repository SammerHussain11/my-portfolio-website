'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { validateCertificationAction } from '@/app/actions';

type ValidationResult = {
  isValid: boolean;
  validationDetails: string;
} | null;

export default function CertificationValidator() {
  const [identifier, setIdentifier] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const response = await validateCertificationAction(identifier);

    if (response.success) {
      setResult(response.data);
    } else {
      setError(response.error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Enter Certification URL or ID"
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !identifier}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Validate'}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Alert variant={result.isValid ? 'default' : 'destructive'} className="bg-background">
          {result.isValid ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4" />}
          <AlertTitle>{result.isValid ? 'Validation Successful' : 'Validation Failed'}</AlertTitle>
          <AlertDescription>{result.validationDetails}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
